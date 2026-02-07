import { useState, useEffect } from 'react'
import { HyperFormula } from 'hyperformula'

export interface SpreadsheetData {
    hf: HyperFormula
    sheetId: number
}

export function useSpreadsheet(initialData: (string | number | null)[][]) {
    const [hf] = useState(() => HyperFormula.buildEmpty({
        licenseKey: 'gpl-v3',
    }))
    const [sheetId] = useState(() => {
        const id = hf.addSheet('Sheet1')
        hf.setSheetContent(id, initialData)
        return id
    })

    const setCellValue = (row: number, col: number, value: string | number) => {
        try {
            hf.setCellContents({ sheet: sheetId, row, col }, [[value]])
        } catch (error) {
            console.error('Error setting cell value:', error)
        }
    }

    const getCellValue = (row: number, col: number): string | number | null => {
        try {
            const value = hf.getCellValue({ sheet: sheetId, row, col })
            return value
        } catch (error) {
            console.error('Error getting cell value:', error)
            return null
        }
    }

    const getCellFormula = (row: number, col: number): string | null => {
        try {
            const formula = hf.getCellFormula({ sheet: sheetId, row, col })
            return formula || null
        } catch (error) {
            return null
        }
    }

    const getAllCellValues = (): (string | number | null)[][] => {
        try {
            const serialized = hf.getSheetSerialized(sheetId)
            return serialized as (string | number | null)[][]
        } catch (error) {
            console.error('Error getting all values:', error)
            return []
        }
    }

    return {
        hf,
        sheetId,
        setCellValue,
        getCellValue,
        getCellFormula,
        getAllCellValues
    }
}
