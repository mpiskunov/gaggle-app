"use client";

import { ActiveTournamentInfoDTO } from "@/models/dtos/tournaments";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Modal from "@mui/material/Modal";
import React from "react";
interface PageProps {
  tournament: ActiveTournamentInfoDTO | null;
}
const TournamentClientPage = ({ tournament }: PageProps) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const handleOpen = (title: string) => {
    setModalTitle(title);
    setOpen(true);
  };
  const handleClose = () => {
    setModalTitle("");
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this?
          </Typography>
          <Button variant={"contained"} onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
      ;
      {tournament && (
        <Container fixed maxWidth="lg">
          <Box sx={{ display: "flex" }} pt={3} alignItems={"flex-end"} justifyContent={"space-between"} borderBottom={"1px solid black"}>
            <Box display={"flex"} alignItems={"flex-end"}>
              <Typography variant="h2">{tournament.name}</Typography>
              <Typography variant="h4">({tournament.code})</Typography>
            </Box>
            <Typography variant={"h6"} ml={2}>
              {tournament.year} {tournament.isPublished ? "(active) " : "(unpublished)"}
            </Typography>
          </Box>
          <Grid container my={3} spacing={2} justifyContent={"center"}>
            <Grid size={{ xs: 12 }}>
              <TableContainer component={Paper}>
                <Table size="medium" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Course</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong>Address</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong># of Rounds</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong>Holes</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Actions</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tournament.courses.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                          <Link
                            target="_blank"
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ", " + item.address)}`}
                          >
                            {item.address}
                          </Link>
                        </TableCell>
                        <TableCell>{tournament.courseRounds.filter((coRound) => coRound.courseId == item.id).length}</TableCell>
                        <TableCell>
                          {tournament.courseRounds
                            .filter((coRound) => coRound.courseId == item.id)
                            .map((x) => x.numberOfHoles)
                            .join("/")}
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={() => handleOpen(item.name)}>
                            <MoreVertIcon fontSize="large" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TableContainer component={Paper}>
                <Table size="medium" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Name</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong>Email</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong>Co-Commissioner</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Actions</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tournament.commissioners.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                          <Link href={`mailto:${item.email}`}>{item.email}</Link>
                        </TableCell>
                        <TableCell>{item.isCoCommissioner ? "yes" : "no"}</TableCell>
                        <TableCell>
                          <IconButton onClick={() => alert("clicked!")} aria-label="more options">
                            <MoreVertIcon fontSize="large" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TableContainer component={Paper}>
                <Table size="medium" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Name</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong>Email</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Actions</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tournament.participants.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                          <Link href={`mailto:${item.email}`}>{item.email}</Link>
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={() => alert("clicked!")} aria-label="more options">
                            <MoreVertIcon fontSize="large" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default TournamentClientPage;
