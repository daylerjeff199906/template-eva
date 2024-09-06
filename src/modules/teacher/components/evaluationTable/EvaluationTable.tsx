/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useMemo, useState } from 'react'
import 'react-data-grid/lib/styles.css'
import DataGrid, {
  Column,
  ColumnOrColumnGroup,
  SelectColumn,
  SortColumn,
  textEditor,
} from 'react-data-grid'

import { faker } from '@faker-js/faker'

interface SummaryRow {
  id: string
  totalCount: number
  yesCount: number
}

interface Row {
  id: number
  number_doc: string
  student: string
  progress: number
  progress2: number
  progress3: number
  progress4: number
  //   area: string
  //   contact: string
  //   assignee: string
  //   progress: number
  //   startTimestamp: number
  //   endTimestamp: number
  //   budget: number
  //   transaction: string
  //   available: boolean
}

function getColumns(): readonly ColumnOrColumnGroup<Row, SummaryRow>[] {
  return [
    SelectColumn,
    {
      key: 'id',
      name: 'ID',
      frozen: true,
      resizable: false,
      renderSummaryCell() {
        return <strong>Total</strong>
      },
    },
    {
      key: 'number_doc',
      name: 'N° Documento',
      width: 'max-content',
      draggable: true,
      renderEditCell: textEditor,
    },
    {
      key: 'student',
      name: 'Alumno',
      width: 'max-content',
      draggable: true,
      renderEditCell: textEditor,
    },
    {
      key: 'progress',
      name: 'Progress',
      draggable: true,
      renderEditCell: textEditor,
    },
    {
      key: 'progress2',
      name: 'Progress2',
      draggable: true,
      renderEditCell: textEditor,
    },
    {
      key: 'progress3',
      name: 'Progress3',
      draggable: true,
      renderEditCell: textEditor,
    },
    {
      key: 'progress4',
      name: 'Progress4',
      draggable: true,
      renderEditCell: textEditor,
    },
  ]
}

function rowKeyGetter(row: Row) {
  return row.id
}

function createRows(): readonly Row[] {
  //   const now = Date.now()
  const rows: Row[] = []

  for (let i = 0; i < 500; i++) {
    rows.push({
      id: i,
      number_doc: Math.random().toString().slice(2, 10),
      student: faker.person.fullName() + ' ' + faker.person.lastName(),
      progress: Math.random() * 100,
      progress2: Math.random() * 100,
      progress3: Math.random() * 100,
      progress4: Math.random() * 100,
    })
  }

  return rows
}

export const EvaluationTable = () => {
  const [rows, setRows] = useState(createRows)
  const [selectedRows, setSelectedRows] = useState(
    (): ReadonlySet<number> => new Set()
  )

  const columns = useMemo(() => getColumns(), [])

  const gridElement = (
    <DataGrid
      rowKeyGetter={rowKeyGetter}
      columns={columns as Column<Row>[]}
      rows={rows}
      selectedRows={selectedRows}
      onSelectedRowsChange={setSelectedRows}
      onRowsChange={setRows}
      className="fill-grid"
      //   topSummaryRows={summaryRows}
      //   bottomSummaryRows={summaryRows}
      //   direction={direction}
    />
  )

  return (
    <>
      {/* <div className={toolbarClassname}>
        <ExportButton
          onExport={() => exportToCsv(gridElement, 'CommonFeatures.csv')}
        >
          Export to CSV
        </ExportButton>
        <ExportButton
          onExport={() => exportToPdf(gridElement, 'CommonFeatures.pdf')}
        >
          Export to PDF
        </ExportButton>
      </div> */}
      {gridElement}
    </>
  )
}
