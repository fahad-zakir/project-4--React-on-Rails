import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SingleActivity from "./SingleActivity";

const PostList = (props) => {

    return (
        <div>
            {
                props.activitiess.map((activity) => {
                    return (
                        <div key={activity.id}>
                            <SingleActivity
                                activity_photo={activity.activity_photo}
                                title={activity.title}
                                body={activity.body}
                                activity={activity}
                                activityId={activity.id}
                                deletePost={props.deletePost}
                                editPost={props.editPost}
                                handleEditPostChange={props.handleEditPostChange}
                            />

                        </div>
                    )
                })
            }
        </div>
    )

}

export default PostList;

