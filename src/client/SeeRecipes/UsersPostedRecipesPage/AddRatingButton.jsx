import Button from "@mui/material/Button"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { motion } from "framer-motion";

import { usePostRatingMutation, useGetUserQuery } from "../../../redux/api"

import { useState } from "react"

import { TextField } from "@mui/material";

const AddRatingButton = ({ id }) => {
    const [reviewButton, setReviewButton] = useState(true);
    const [addRating, setAddRating] = useState(false);
    const [writtenReview, setWrittenReview] = useState("");
    const [rating, setRating] = useState(0);
    const [snackBar, setSuccessSnackbar] = useState(false);
    const [failSnackBar, setFailSnackbar] = useState(false);
    const { data, error, isLoading } = useGetUserQuery();
    const [postRating] = usePostRatingMutation(id)

    if (isLoading) {
        return null
    }
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (rating === 0 || writtenReview === "") {
                setFailSnackbar(true);
            }
            else {
                const result = await postRating({ id, rating: Number(rating), writtenReview });
                console.log(result);
                if (result) {
                    setSuccessSnackbar(true);
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleClose = (event, reason) => {
        setSuccessSnackbar(false);
    };
    const handleFailClose = (event, reason) => {
        setFailSnackbar(false);
    };

    return (
        <div>
            {snackBar &&
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'center', horizontal: 'center' }}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}>
                        Your review was submitted!
                    </Alert>
                </Snackbar>
            }
            {failSnackBar &&
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'center', horizontal: 'center' }}>
                    <Alert
                        onClose={handleFailClose}
                        severity="error"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Please make sure you enter all fields
                    </Alert>
                </Snackbar>
            }
            {!data
                ? <div />
                : <div>
                    {reviewButton &&
                        <Typography sx={{ textAlign: "center" }}>
                            <Button
                                variant="contained"
                                color="success"
                                sx={{
                                    my: 5,
                                    p: 1,
                                    borderRadius: "10px",
                                    backgroundColor: "#65B741",
                                    border: 2,
                                    borderBottom: 5,
                                    borderColor: "#445D48",
                                    textTransform: "none"
                                }}
                                onClick={() => {
                                    setAddRating(true);
                                    setReviewButton(false);
                                }}>
                                Add Rating
                            </Button>
                        </Typography>
                    }
                    {addRating &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}>
                            <Box sx={{ mx: 1, mt: 10, backgroundColor: "#F1E4C3", border: 3, borderColor: "#503C3C", borderBottom: 7, borderRadius: "20px" }}>

                                <form onSubmit={handleSubmit}>
                                    <Typography
                                        variant="h6"
                                        sx={{ color: "#362706", fontWeight: "bold", textAlign: "center", mb: 1 }}>
                                        Add Your Rating Review:
                                    </Typography>
                                    <Stack direction="row">
                                        <Box sx={{ p: 1, m: 1, backgroundColor: "#FFF8E3", borderRadius: "20px" }}>
                                            <Typography sx={{ width: "200px", color: "#362706", mb: 1, textAlign: "center" }}>
                                                Add Rating from 1-5:
                                            </Typography>
                                            <Typography sx={{ textAlign: "center" }}>
                                                <Rating
                                                    name="Rating out of 5"
                                                    value={Number(rating)}
                                                    precision={1}
                                                    onChange={(event) => setRating(event.target.value)}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                            </Typography>
                                        </Box>
                                        <Box sx={{ width: "450px", p: 1, m: 1, backgroundColor: "#FFF8E3", borderRadius: "20px" }}>
                                            <TextField
                                                label="Written Comment"
                                                multiline
                                                value={writtenReview}
                                                onChange={(event) => setWrittenReview(event.target.value)}
                                                sx={{ m: 1, width: "97%" }}
                                            />
                                        </Box>
                                    </Stack>
                                    <Typography sx={{ textAlign: "center" }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="success"
                                            sx={{
                                                width: "140px",
                                                my: 2,
                                                p: 1,
                                                borderRadius: "10px",
                                                backgroundColor: "#65B741",
                                                border: 2,
                                                borderBottom: 5,
                                                borderColor: "#445D48",
                                                textTransform: "none"
                                            }}>
                                            Submit
                                        </Button>
                                    </Typography>
                                </form>
                                <Typography sx={{ textAlign: "center" }}>
                                    <Button
                                        onClick={() => setAddRating(false)}
                                        variant="contained"
                                        color="error"
                                        sx={{
                                            textTransform: "none",
                                            m: 1,
                                            backgroundColor: "#D24545",
                                            border: 2,
                                            borderBottom: 5,
                                            borderColor: "#862B0D",
                                            borderRadius: "10px"
                                        }}>
                                        Discrad Review
                                    </Button>
                                </Typography>
                            </Box>
                        </motion.div>
                    }
                </div>
            }
        </div>
    )
}

export default AddRatingButton;
