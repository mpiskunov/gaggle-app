"use client";
/* app/commissioner/accolades/_AccoladesTableClient.tsx
   ────────────────────────────────────────────────────
*/

import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  IconButton, TextField, Button, Typography,
} from "@mui/material";
import EditIcon   from "@mui/icons-material/Edit"; //
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon  from "@mui/icons-material/Check";
import CloseIcon  from "@mui/icons-material/Close";
import { useState } from "react";

type Accolade = { id: string; name: string; description: string; value: string };

type Props = {
  accolades: Accolade[];
  createAction: (fd: FormData) => Promise<void>;
  updateAction: (fd: FormData) => Promise<void>;
  deleteAction: (fd: FormData) => Promise<void>;
};

export default function AccoladesTableClient({
  accolades,
  createAction,
  updateAction,
  deleteAction,
}: Props) {
  const [rows, setRows]     = useState(accolades);
  const [newRow, setNewRow] = useState<Accolade | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const [error, setError]   = useState<string | null>(null);

  /* helpers */
  const submitCreate = async () => {
    if (!newRow?.name || !newRow.description || !newRow.value) {
      setError("Please fill in all fields.");
      return;
    }
    const fd = new FormData();
    fd.set("name", newRow.name);
    fd.set("description", newRow.description);
    fd.set("value", newRow.value);
    await createAction(fd);

    setRows([...rows, { ...newRow, id: crypto.randomUUID() }]); // optimistic
    setNewRow(null);
    setError(null);
  };

  const submitUpdate = async (row: Accolade) => {
    if (!row.name || !row.description || !row.value) {
      setError("Fields cannot be empty.");
      return;
    }
    const fd = new FormData();
    fd.set("id", row.id);
    fd.set("name", row.name);
    fd.set("description", row.description);
    fd.set("value", row.value);
    await updateAction(fd);

    setRows(rows.map((r) => (r.id === row.id ? row : r)));
    setEditId(null);
    setError(null);
  };

  const submitDelete = async (rowId: string) => {
    const fd = new FormData();
    fd.set("id", rowId);
    await deleteAction(fd);

    setRows(rows.filter((r) => r.id !== rowId));
    if (editId === rowId) setEditId(null);
  };

  /* UI */
  return (
    <>
      {error && (
        <Typography color="error" sx={{ mb: 1 }}>
          {error}
        </Typography>
      )}

      <TableContainer>
        <Table
          sx={{
            "& th, & td": { borderRight: 1, borderColor: "divider" },
            "& th:last-of-type, & td:last-of-type": { borderRight: 0 },
          }}
        >
          <TableHead>
            <TableRow sx={{ bgcolor: "grey.200" }}>
              <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="right">
                Value
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="right" width={120}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* existing rows */}
            {rows.map((row) => (
              <TableRow key={row.id} hover>
                {editId === row.id ? (
                  <>
                    <TableCell>
                      <TextField
                        size="small"
                        defaultValue={row.name}
                        onChange={(e) => (row.name = e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        size="small"
                        defaultValue={row.description}
                        onChange={(e) => (row.description = e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        size="small"
                        defaultValue={row.value}
                        onChange={(e) => (row.value = e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => submitUpdate(row)}>
                        <CheckIcon />
                      </IconButton>
                      <IconButton onClick={() => setEditId(null)}>
                        <CloseIcon />
                      </IconButton>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => setEditId(row.id)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => submitDelete(row.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}

            {/* create-new row */}
            {newRow ? (
              <TableRow hover>
                <TableCell>
                  <TextField
                    size="small"
                    placeholder="Name"
                    onChange={(e) =>
                      setNewRow({ ...newRow, name: e.target.value })
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    placeholder="Description"
                    onChange={(e) =>
                      setNewRow({ ...newRow, description: e.target.value })
                    }
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    size="small"
                    placeholder="Value"
                    onChange={(e) =>
                      setNewRow({ ...newRow, value: e.target.value })
                    }
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={submitCreate}>
                    <CheckIcon />
                  </IconButton>
                  <IconButton onClick={() => { setNewRow(null); setError(null); }}>
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="right">
                  <Button 
                    sx={{
                        /* For centering */
                        display: "block",
                        mx: "auto",

                        /* Site green */
                        color: "white",
                        bgcolor: "success.main",

                        /* Rounded corners */
                        "&:hover": {
                            bgcolor: "success.dark",
                        },

                    }}
                  
                  onClick={() => setNewRow({ id: "", name: "", description: "", value: "" })}>
                    Add New
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
