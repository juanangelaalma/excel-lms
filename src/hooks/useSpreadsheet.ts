import { useState, useEffect, useCallback } from "react";
import { HyperFormula, DetailedCellError } from "hyperformula";

export interface SpreadsheetData {
    hf: HyperFormula;
    sheetId: number;
}

export function useSpreadsheet(initialData: (string | number | null)[][]) {
    // version is bumped every time a cell changes — forces consumers to re-compute derived data
    const [version, setVersion] = useState(0);

    const [hf] = useState(() =>
        HyperFormula.buildEmpty({
            licenseKey: "gpl-v3",
        }),
    );

    const [sheetId] = useState<number>(() => {
        const name = "Sheet1";
        hf.addSheet(name);
        const numericSheetId = hf.getSheetId(name)!;
        hf.setSheetContent(numericSheetId, initialData);
        return numericSheetId;
    });

    // Reset sheet content when initialData changes (e.g., when task changes)
    useEffect(() => {
        if (initialData && initialData.length > 0) {
            hf.setSheetContent(sheetId, initialData);
            setVersion((v) => v + 1);
        }
    }, [initialData, hf, sheetId]);

    const setCellValue = useCallback(
        (row: number, col: number, value: string | number) => {
            try {
                hf.setCellContents({ sheet: sheetId, row, col }, [[value]]);
                setVersion((v) => v + 1); // trigger re-render
            } catch (error) {
                console.error("Error setting cell value:", error);
            }
        },
        [hf, sheetId],
    );

    const getCellValue = useCallback(
        (
            row: number,
            col: number,
        ): string | number | boolean | null | undefined | DetailedCellError => {
            try {
                return hf.getCellValue({ sheet: sheetId, row, col });
            } catch (error) {
                console.error("Error getting cell value:", error);
                return null;
            }
        },
        [hf, sheetId],
    );

    const getCellFormula = useCallback(
        (row: number, col: number): string | null => {
            try {
                return hf.getCellFormula({ sheet: sheetId, row, col }) || null;
            } catch {
                return null;
            }
        },
        [hf, sheetId],
    );

    // Returns computed/evaluated values (not raw formulas) — safe for display in the grid
    const getAllCellValues = useCallback((): (string | number | null)[][] => {
        try {
            const rows = hf.getSheetDimensions(sheetId);
            const result: (string | number | null)[][] = [];
            for (let r = 0; r < rows.height; r++) {
                const row: (string | number | null)[] = [];
                for (let c = 0; c < rows.width; c++) {
                    const val = hf.getCellValue({
                        sheet: sheetId,
                        row: r,
                        col: c,
                    });
                    if (val === null || val === undefined) {
                        row.push(null);
                    } else if (val instanceof DetailedCellError) {
                        row.push(val.value);
                    } else {
                        row.push(val as string | number);
                    }
                }
                result.push(row);
            }
            return result;
        } catch (error) {
            console.error("Error getting all values:", error);
            return [];
        }
    }, [hf, sheetId]);

    return {
        version,
        hf,
        sheetId,
        setCellValue,
        getCellValue,
        getCellFormula,
        getAllCellValues,
    };
}
