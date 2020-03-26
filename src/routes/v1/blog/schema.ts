import Joi from '@hapi/joi';
import { JoiObjectId, JoiUrlEndpoint } from '../../../helpers/validator';

export default {
	blogUrl: Joi.object().keys({
		url: Joi.string().required().uri()
	}),
	blogId: Joi.object().keys({
		id: JoiObjectId().required()
	}),
	blogTag: Joi.object().keys({
		tag: Joi.string().required()
	}),
	pagination: Joi.object().keys({
		pageNumber: Joi.number().required().integer(),
		pageItemCount: Joi.number().required().integer(),
	}),
	authorId: Joi.object().keys({
		id: JoiObjectId().required()
	}),
	blogCreate: Joi.object().keys({
		title: Joi.string().required().min(3).max(500),
		description: Joi.string().required().min(3).max(2000),
		text: Joi.string().required().max(50000),
		blogUrl: JoiUrlEndpoint().required().max(200),
		imgUrl: Joi.string().optional().uri().max(200),
		score: Joi.number().optional().min(0).max(1),
		tags: Joi.array().optional().items(Joi.string().uppercase()),
	}),
	blogUpdate: Joi.object().keys({
		title: Joi.string().optional().min(3).max(500),
		description: Joi.string().optional().min(3).max(2000),
		text: Joi.string().optional().max(50000),
		blogUrl: JoiUrlEndpoint().required().max(200),
		imgUrl: Joi.string().optional().uri().max(200),
		score: Joi.number().optional().min(0).max(1),
		tags: Joi.array().optional().items(Joi.string().uppercase())
	})
};