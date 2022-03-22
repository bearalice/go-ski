const Resort = require('../models/resort');

//show all 
module.exports.index = async (req, res) => {
    const resorts = await Resort.find();
    res.render('resorts/index', { resorts })
}

//CREATE 
module.exports.renderNewForm = (req, res) => {
    res.render('resorts/new');
} //controller gets view and send the response back to browser 


module.exports.createResort = async (req, res) => {
    console.log(req.body);
    const resort = new Resort(req.body.resort);
    console.log(resort);
    await resort.save();
    res.send("Done!");
}

module.exports.showResort = async (req, res,) => {
    const resort = await Resort.findById(req.params.id);
    res.render('resorts/show', { resort });
}


//edit
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const resort = await Resort.findById(id)
    res.render('resorts/edit', { resort });
}

module.exports.updateResort = async (req, res) => {
    console.log("try to update");
    const { id } = req.params;
    console.log(req.body);
    const resort = await Resort.findByIdAndUpdate(id, { ...req.body.resort });

    await resort.save();
    res.redirect(`/resorts/${resort._id}`)
}

//delete
module.exports.deleteResort = async (req, res) => {
    const { id } = req.params;
    await Resort.findByIdAndDelete(id);
    res.redirect('/resorts');
}