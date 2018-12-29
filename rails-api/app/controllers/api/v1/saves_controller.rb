module Api
  module V1
    class SavesController < ApplicationController
      def index
        saves = Save.order('created_at DESC');
        render json: {status: 'SUCCESS', message:'Loaded saves', data:saves}, status: :ok
        # render json: saves
      end

      def show
        save = Save.find(params[:id])
        render json: {status: 'SUCCESS', message:'Loaded save', data:save}, status: :ok
      end

      def create
        save = Save.new(save_params)

        if save.save
          render json: {status: 'SUCCESS', message:'Saved save', data:save}, status: :ok
        else
          render json: {status: 'ERROR', message:'Save not saved', data:save.errors}, status: :unprocessable_entity
        end
      end

      def destroy
        save = Save.find(params[:id])
        save.destroy
        render json: {status: 'SUCCESS', message:'Deleted save', data:save}, status: :ok
      end

      def update
        save = Save.find(params[:id])

        if save.update_attributes(save_params)
          render json: {status: 'SUCCESS', message:'Updated save', data:save}, status: :ok
        else
          render json: {status: 'ERROR', message:'Save not updated', data:save.errors}, status: :unprocessable_entity
        end
      end

      private

      def save_params
        params.permit(:article_id, :source, :author, :title, :description, :url, :image_url, :publish_date)
      end
    end
  end
end
