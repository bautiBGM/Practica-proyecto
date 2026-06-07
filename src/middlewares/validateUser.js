const validateUser = (req, res, next) => {

    console.log(req.body);
    
    const { name, mail, pass } = req.body

    if (!name || !mail || !pass) {
        return res.status(400).json({
            error: "Name, mail y password son obligatorios"
        })
    }

    if (pass.length < 6) {
        return res.status(400).json({
            error: "La password debe tener al menos 6 caracteres"
        })
    }

    next()
}

export default validateUser