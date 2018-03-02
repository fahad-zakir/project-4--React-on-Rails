import React from "react";
import axios from 'axios'
import styled from "styled-components"

function NewCommentForm(props) {
    return (
        <div>
            <div>
                <form onSubmit={props.createNewComment}>
                    <div>
                        <label htmlFor="title">Title:</label>
                    </div>
                    <div>
                        <input onChange={props.handleCommentChange} name="title" value={props.comment.title} />
                    </div>
                    <div>
                        <label htmlFor="body">Description: </label>
                    </div>
                    <div>
                        <input onChange={props.handleCommentChange} name="body" maxLength="30" value={props.comment.body} />
                    </div>
                    <div>
                        <label htmlFor="comment_photo">Photo URL:</label>
                        <div>
                            <input onChange={props.handleCommentChange} name="comment_photo" type="text" value={props.comment_photo} />
                        </div>
                    </div>

                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewCommentForm;