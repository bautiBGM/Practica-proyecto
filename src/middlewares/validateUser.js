const validateUser = (req, res, next) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({
            error: "Name, email y password son obligatorios"
        })
    }

    if (password.length < 6) {
        return res.status(400).json({
            error: "La password debe tener al menos 6 caracteres"
        })
    }

    next()
}

export default validateUser