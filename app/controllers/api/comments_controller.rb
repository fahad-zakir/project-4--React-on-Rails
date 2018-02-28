class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render json: @comments
    end
    def create
        @comment = Comment.create!(comment_params)
        render json: @comment
    end
    def show
        @comment = Comment.find(params[:id])
        render json: @comment
    end
    def destroy
        @comment = Comment.find(params[:id].destroy
        @comments = Comment.all
        render json: @comments 
    end
    def update
        @comment = Comment.find(params[:id]
        @comment.update!(city_params
        
        render json: @comment
    end

    private
        def comment_params
            params.require(:comment).permit(:body)
        end

end


