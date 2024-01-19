import Button from "@mui/material/Button"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { usePostRatingMutation, useGetUserQuery } from "../../../redux/api"
import { useState } from "react"
import { TextField } from "@mui/material";

const AddRatingButton = ({ id }) => {
    const [reviewButton, setReviewButton] = useState(true);
    const [addRating, setAddRating] = useState(false);
    const [writtenReview, setWrittenReview] = useState("");
    const [rating, setRating] = useState(0);
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
        if (rating !== null) {
            const result = await postRating({ id, rating: Number(rating), writtenReview });
            console.log(result);
        } else {
            console.log("Rating is missing");
        }
    }


    return (
        <div>
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
                                }}
                            >
                                Add Rating
                            </Button>
                        </Typography>
                    }
                    {addRating &&
                        <Box>
                            <Stack direction="column">
                                <form onSubmit={handleSubmit}>
                                    <Box>
                                        <Typography sx={{ color: "#205375" }}>
                                            Add Your Rating for this Equipment:
                                        </Typography>
                                        <Rating
                                            name="Equipment Rating"
                                            value={Number(rating)}
                                            precision={1}
                                            onChange={(event) => setRating(event.target.value)}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                    </Box>
                                    <Box >
                                        <TextField
                                            label="Written Comment"
                                            multiline
                                            value={writtenReview}
                                            onChange={(event) => setWrittenReview(event.target.value)}
                                            sx={{ m: 1, width: "97%" }}
                                        />
                                    </Box>
                                    <Typography sx={{ textAlign: "center" }}>
                                        <Button type="submit">
                                            Submit
                                        </Button>
                                    </Typography>
                                </form>
                            </Stack>
                        </Box>
                    }
                </div>
            }
        </div>
    )
}

export default AddRatingButton;
