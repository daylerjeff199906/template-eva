/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useMemo, useState } from 'react'
import 'react-data-grid/lib/styles.css'
import DataGrid, {
  Column,
  SelectCellFormatter,
  SelectColumn,
  SortColumn,
  textEditor,
} from 'react-data-grid'

import type { Direction } from './types'
import type { Props } from './props'
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

const dateFormatter = new Intl.DateTimeFormat(navigator.language)
const currencyFormatter = new Intl.NumberFormat(navigator.language, {
  style: 'currency',
  currency: 'eur',
})

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

function getColumns(): readonly Column<Row, SummaryRow>[] {
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
      key: 'student',
      name: 'Alumno',
      width: 'max-content',
      draggable: true,
      renderEditCell: textEditor,
    },
    {
      key: 'area',
      name: 'Area',
      renderEditCell: textEditor,
    },
    // {
    //   key: 'contact',
    //   name: 'Contact',
    //   renderEditCell: textEditor,
    // },
    // {
    //   key: 'assignee',
    //   name: 'Assignee',
    //   renderEditCell: textEditor,
    // },
    // {
    //   key: 'startTimestamp',
    //   name: 'Start date',
    //   renderCell(props) {
    //     return dateFormatter.format(props.row.startTimestamp)
    //   },
    // },
    // {
    //   key: 'endTimestamp',
    //   name: 'Deadline',
    //   renderCell(props) {
    //     return dateFormatter.format(props.row.endTimestamp)
    //   },
    // },
    // {
    //   key: 'budget',
    //   name: 'Budget',
    //   renderCell(props) {
    //     return currencyFormatter.format(props.row.budget)
    //   },
    // },
    // {
    //   key: 'transaction',
    //   name: 'Transaction type',
    // },
    // {
    //   key: 'available',
    //   name: 'Available',
    //   renderCell({ row, onRowChange, tabIndex }) {
    //     return (
    //       <SelectCellFormatter
    //         value={row.available}
    //         onChange={() => {
    //           onRowChange({ ...row, available: !row.available })
    //         }}
    //         tabIndex={tabIndex}
    //       />
    //     )
    //   },
    //   renderSummaryCell({ row: { yesCount, totalCount } }) {
    //     return `${Math.floor((100 * yesCount) / totalCount)}% ✔️`
    //   },
    // },
  ]
}

function rowKeyGetter(row: Row) {
  return row.id
}

function createRows(): readonly Row[] {
  //   const now = Date.now()
  const rows: Row[] = []

  for (let i = 0; i < 1000; i++) {
    rows.push({
      id: i,
      student: faker.person.fullName(),
      number_doc: Math.random().toString(36).substring(7),
      progress: Math.random() * 100,
      progress2: Math.random() * 100,
      progress3: Math.random() * 100,
      progress4: Math.random() * 100,
      //   area: faker.person.jobArea(),
      //   contact: faker.internet.exampleEmail(),
      //   assignee: faker.person.fullName(),
      //   progress: Math.random() * 100,
      //   startTimestamp: now - Math.round(Math.random() * 1e10),
      //   endTimestamp: now + Math.round(Math.random() * 1e10),
      //   budget: 500 + Math.random() * 10500,
      //   transaction: faker.finance.transactionType(),
      //   available: Math.random() > 0.5,
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
    // case 'assignee':
    // case 'title':
    // case 'client':
    // case 'area':
    // case 'country':
    // case 'contact':
    // case 'transaction':
    // case 'account':
    // case 'version':
    //   return (a, b) => {
    //     return a[sortColumn].localeCompare(b[sortColumn])
    //   }
    // case 'available':
    //   return (a, b) => {
    //     return a[sortColumn] === b[sortColumn] ? 0 : a[sortColumn] ? 1 : -1
    //   }
    // case 'progress':
    // case 'startTimestamp':
    // case 'endTimestamp':
    // case 'budget':
    //   return (a, b) => {
    //     return a[sortColumn] - b[sortColumn]
    //   }
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

  //   const summaryRows = useMemo((): readonly SummaryRow[] => {
  //     return [
  //       {
  //         id: 'total_0',
  //         totalCount: rows.length,
  //         yesCount: rows.filter((r) => r.available).length,
  //       },
  //     ]
  //   }, [rows])

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
      columns={columns}
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
