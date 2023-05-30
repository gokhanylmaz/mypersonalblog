const getIndexPage = (req, res) => {
    res.render('index')
}
const getProjectPage = (req, res) => {
    res.render('project')
}
const getAboutPage = (req, res) => {
    res.render('about')
}
const getContactPage = (req, res) => {
    res.render('contact')
}
const getAdminPage = (req, res) => {
    res.render('admin')
}


module.exports = { getIndexPage, getProjectPage, getAboutPage, getContactPage, getAdminPage }