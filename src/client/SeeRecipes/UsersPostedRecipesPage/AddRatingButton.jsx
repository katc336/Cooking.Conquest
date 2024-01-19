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
    console.log(rating)
    console.log(writtenReview)
    console.log(id)
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
            if( rating === 0 || writtenReview === "") {
                setFailSnackbar(true);
            }
            else{
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
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
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
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
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
                            <Box sx={{ mx: 20, mt: 10, p: 3, backgroundColor: "#F1E4C3", border: 3, borderColor: "#503C3C", borderBottom: 7, borderRadius: "20px" }}>
                                <Stack direction="column">
                                    <form onSubmit={handleSubmit}>
                                        <Typography
                                            variant="h6"
                                            sx={{ color: "#362706", fontWeight: "bold", textAlign: "center", mb: 1 }}>
                                            Add Your Rating Review:
                                        </Typography>
                                        <Box sx={{ p: 2, backgroundColor: "#FFF8E3", borderRadius: "20px" }}>
                                            <Typography sx={{ color: "#362706" }}>
                                                Add Rating from 1-5:
                                            </Typography>
                                            <Rating
                                                name="Rating out of 5"
                                                value={Number(rating)}
                                                precision={1}
                                                onChange={(event) => setRating(event.target.value)}
                                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                            />
                                        </Box>
                                        <Box sx={{ p: 2, mt: 2, backgroundColor: "#FFF8E3", borderRadius: "20px" }}>
                                            <TextField
                                                label="Written Comment"
                                                multiline
                                                value={writtenReview}
                                                onChange={(event) => setWrittenReview(event.target.value)}
                                                sx={{ m: 1, width: "97%" }}
                                            />
                                        </Box>
                                        <Typography sx={{ textAlign: "center" }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="success"
                                                sx={{
                                                    mt: 2,
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
                                </Stack>
                            </Box>
                        </motion.div>
                    }
                </div>
            }
        </div>
    )
}

export default AddRatingButton;
