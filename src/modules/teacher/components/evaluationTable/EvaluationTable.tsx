'use client'
import { useMemo, useState } from 'react'
import 'react-data-grid/lib/styles.css'
import DataGrid, {
  Column,
  ColumnOrColumnGroup,
  SelectColumn,
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
}

const optionsSelect = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
]

function getColumns(): readonly ColumnOrColumnGroup<Row, SummaryRow>[] {
  return [
    SelectColumn,
    {
      key: 'id',
      name: 'ID',
      frozen: true,
      width: 'max-content',
      resizable: false,
      renderSummaryCell() {
        return <strong>Total</strong>
      },
    },
    {
      key: 'number_doc',
      name: 'N° Documento',
      // width: 'max-content',
      draggable: true,
      frozen: true,
      renderEditCell: textEditor,
    },
    {
      key: 'student',
      name: 'Alumno',
      // width: 'max-content',
      draggable: true,
      frozen: true,
      renderEditCell: textEditor,
    },
    {
      key: 'progress',
      name: 'Progress',
      draggable: true,
      renderEditCell: (p) => (
        <select autoFocus>
          {optionsSelect.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      ),
    },
    {
      key: 'progress2',
      name: 'Progress 2',
      draggable: true,
      renderEditCell: (p) => (
        <select autoFocus>
          {optionsSelect.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      ),
    },
    {
      key: 'progress3',
      name: 'Progress 3',
      draggable: true,
      renderEditCell: (p) => (
        <select autoFocus>
          {optionsSelect.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      ),
    },
    {
      key: 'progress4',
      name: 'Progress 4',
      draggable: true,
      renderEditCell: (p) => (
        <select autoFocus>
          {optionsSelect.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      ),
    },
  ]
}

function rowKeyGetter(row: Row) {
  return row.id
}

function createRows(count = 200): readonly Row[] {
  const rows: Row[] = []
  for (let i = 0; i < count; i++) {
    rows.push({
      id: i + 1,
      number_doc: faker.phone.imei(),
      student: faker.person.fullName() + ' ' + faker.person.lastName(),
      progress: 1,
      progress2: 1,
      progress3: 1,
      progress4: 1,
    })
  }
  return rows
}

export const EvaluationTable = () => {
  const [rows, setRows] = useState<readonly Row[]>([])
  const [selectedRows, setSelectedRows] = useState<ReadonlySet<number>>(
    () => new Set()
  )

  const columns = useMemo(() => getColumns(), [])

  // Función para agregar una nueva fila
  const addRow = () => {
    const newRow: Row = {
      id: rows.length + 1,
      number_doc: '',
      student: '',
      progress: 0,
      progress2: 0,
      progress3: 0,
      progress4: 0,
    }
    setRows((prevRows) => [...prevRows, newRow])
  }

  // Función para eliminar filas seleccionadas
  const deleteSelectedRows = () => {
    setRows((prevRows) => prevRows.filter((row) => !selectedRows.has(row.id)))
    setSelectedRows(new Set()) // Limpiar selección
  }

  return (
    <div>
      <div className="actions">
        <button onClick={addRow}>Agregar Fila</button>
        <button
          onClick={deleteSelectedRows}
          disabled={selectedRows.size === 0}
        >
          Eliminar Filas Seleccionadas
        </button>
      </div>
      <DataGrid
        rowKeyGetter={rowKeyGetter}
        columns={columns as Column<Row>[]}
        rows={rows}
        selectedRows={selectedRows}
        onSelectedRowsChange={setSelectedRows}
        onRowsChange={setRows}
        className="fill-grid"
        style={{
          backgroundColor: 'white',
          color: 'black',
          colorScheme: 'light',
        }}
      />
    </div>
  )
}
