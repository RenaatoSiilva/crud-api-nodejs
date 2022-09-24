import dbKnex from '../data/db_config.js'

/** Get All Items From programming_languages Table (READ) */
export const listProgrammingLanguages = async (req, res) => {
    try {
        const programming_languages = await dbKnex.select("*").from("programming_languages")
        res.status(200).json(programming_languages)
    } catch (error) {
        res.status(400).json({ msg: "Error: " + error.message })
    }
}

/** Save Item In  programming_languages Table (CREATE) */
export const saveProgrammingLanguage = async (req, res) => {
    const { name, creation_year } = req.body

    if (!name || !creation_year) {
        res.status(400).json({ id: 0, msg: "Error, name and creation year are required!" })
        return
    }
    try {
        const insert = await dbKnex('programming_languages').insert({ name, creation_year })
        res.status(201).json({ msg: "Created with success" })
    } catch (error) {
        res.status(400).json({ msg: "Error: " + error.message })
    }
}

/** Update Item In programming_languages Table (UPDATE) */
export const updateProgrammingLanguage = async (req, res) => {
    const { id } = req.params;

    const { name, creation_year } = req.body

    if (!name || !creation_year) {
        res.status(400).json(
            {
                msg: "Error, name and creation year are required!"
            })
        return
    }

    try {
        await dbKnex("programming_languages").where({ id })
            .update({ name, creation_year })
        res.status(200).json({ msg: "Update with success." })
    } catch (error) {
        res.status(400).json({ msg: "Error: " + error.message })
    }

}

/** Delete Item In programming_languages Table (DELETE) */
export const deleteProgrammingLanguage = async (req, res) => {
    const { id } = req.params;

    try {
        await dbKnex("programming_languages").where({ id }).del()
        res.status(200).json({ msg: "Delete successful" })
    } catch (error) {
        res.status(400).json({ msg: "Error: " + error.message })
    }
}

