const Joi = require('joi');
const bcrypt = require('bcrypt');
const { User } = require('../models/Users');

exports.create = async (req, res, next) => {
    try {
        const { body } = req
        const validationSchema = Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        });
        const { error, value } = validationSchema.validate(body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const hashPassword = await bcrypt.hash(value.password, 10);
        const newObj = { ...value, password: hashPassword };
        console.log(value);
        console.log(newObj);

        await User.create(newObj);


        res.status(200).json({
            data: 'here'
        })
    } catch (error) {
        next(error)
        console.log(error);
    }
}