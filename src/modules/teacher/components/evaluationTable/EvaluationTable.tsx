/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useMemo, useState } from 'react'
import 'react-data-grid/lib/styles.css'
import DataGrid, {
  Column,
  ColumnOrColumnGroup,
  // SelectCellFormatter,
  SelectColumn,
  SortColumn,
  textEditor,
} from 'react-data-grid'

// import type { Direction } from './types'
// import type { Props } from './props'
// import { textEditorClassname } from './TextEditor'

import { faker } from '@faker-js/faker'
// import { css } from '@linaria/core'

// const toolbarClassname = css`
//   display: flex;
//   justify-content: flex-end;
//   gap: 8px;
//   margin-block-end: 8px;
// `;

// const dialogContainerClassname = css`
//   position: absolute;
//   inset: 0;
//   display: flex;
//   place-items: center;
//   background: rgba(0, 0, 0, 0.1);

//   > dialog {
//     width: 300px;
//     > input {
//       width: 100%;
//     }

//     > menu {
//       text-align: end;
//     }
//   }
// `;

// const dateFormatter = new Intl.DateTimeFormat(navigator.language)
// const currencyFormatter = new Intl.NumberFormat(navigator.language, {
//   style: 'currency',
//   currency: 'eur',
// })

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
      student: faker.person.fullName() + ' ' + faker.person.lastName(),
      number_doc: Math.random().toString(36).substring(7),
      progress: Math.random() * 100,
      progress2: Math.random() * 100,
      progress3: Math.random() * 100,
      progress4: Math.random() * 100,
    })
  }

  return rows
}

type Comparator = (a: Row, b: Row) => number

function getComparator(sortColumn: string): Comparator {
  switch (sortColumn) {
    case 'id':
      return (a, b) => {
        return a.id - b.id
      }
    case 'student':
    case 'number_doc':
      return (a, b) => {
        return a[sortColumn].localeCompare(b[sortColumn])
      }
    case 'progress':
    case 'progress2':
    case 'progress3':
    case 'progress4':
      return (a, b) => {
        return a[sortColumn] - b[sortColumn]
      }
    default:
      throw new Error(`unsupported sortColumn: "${sortColumn}"`)
  }
}

export const EvaluationTable = () => {
  const [rows, setRows] = useState(createRows)
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([])
  const [selectedRows, setSelectedRows] = useState(
    (): ReadonlySet<number> => new Set()
  )

  const columns = useMemo(() => getColumns(), [])

  const sortedRows = useMemo((): readonly Row[] => {
    if (sortColumns.length === 0) return rows

    return [...rows].sort((a, b) => {
      for (const sort of sortColumns) {
        const comparator = getComparator(sort.columnKey)
        const compResult = comparator(a, b)
        if (compResult !== 0) {
          return sort.direction === 'ASC' ? compResult : -compResult
        }
      }
      return 0
    })
  }, [rows, sortColumns])

  const gridElement = (
    <DataGrid
      rowKeyGetter={rowKeyGetter}
      columns={columns as Column<Row>[]}
      rows={sortedRows}
      defaultColumnOptions={{
        sortable: true,
      }}
      selectedRows={selectedRows}
      onSelectedRowsChange={setSelectedRows}
      onRowsChange={setRows}
      sortColumns={sortColumns}
      onSortColumnsChange={setSortColumns}
      //   topSummaryRows={summaryRows}
      //   bottomSummaryRows={summaryRows}
      className="fill-grid"
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
