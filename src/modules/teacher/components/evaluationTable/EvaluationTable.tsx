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
import css from 'styled-jsx/css'

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
  { value: '1', label: 'Valor 1' },
  { value: '2', label: 'Valor 2' },
  { value: '3', label: 'Valor 3' },
]

const textEditorInternalClassname = css`
  @layer rdg.TextEditor {
    appearance: none;

    box-sizing: border-box;
    inline-size: 100%;
    block-size: 100%;
    padding-block: 0;
    padding-inline: 6px;
    border: 2px solid #ccc;
    vertical-align: top;
    color: var(--rdg-color);
    background-color: var(--rdg-background-color);

    font-family: inherit;
    font-size: var(--rdg-font-size);

    &:focus {
      border-color: var(--rdg-selection-color);
      outline: none;
    }

    &::placeholder {
      color: #999;
      opacity: 1;
    }
  }
`

export const textEditorClassname = `rdg-text-editor ${textEditorInternalClassname}`

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
        <select
          autoFocus
          className={textEditorClassname}
          value={p.row.progress}
          onChange={(e) =>
            p.onRowChange({ ...p.row, progress: Number(e.target.value) }, true)
          }
        >
          {optionsSelect.map((option) => (
            <option key={option.value}>{option.label}</option>
          ))}
        </select>
      ),
    },
    {
      key: 'progress2',
      name: 'Progress 2',
      draggable: true,
      renderEditCell: (p) => (
        <select
          autoFocus
          className={textEditorClassname}
          value={p.row.progress2}
          onChange={(e) =>
            p.onRowChange({ ...p.row, progress2: Number(e.target.value) }, true)
          }
        >
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
        <select
          autoFocus
          className={textEditorClassname}
          value={p.row.progress3}
          onChange={(e) =>
            p.onRowChange({ ...p.row, progress3: Number(e.target.value) }, true)
          }
        >
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
        <select
          autoFocus
          className={textEditorClassname}
          value={p.row.progress4}
          onChange={(e) =>
            p.onRowChange({ ...p.row, progress4: Number(e.target.value) }, true)
          }
        >
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
