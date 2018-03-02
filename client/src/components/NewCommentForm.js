import React from "react";
import axios from 'axios'
import styled from "styled-components"

function NewCommentForm(props) {
    return (
        <div>
            <form>
                Comment:
                <input type="text" name="comment"/>
            </form>
        </div>
    )
}

export default NewCommentForm;