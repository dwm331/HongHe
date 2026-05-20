export default ({ app }, inject) => {
  const base = (app.router && app.router.options.base) || '/'
  // $imgPath('v1_1.jpeg') → '/img/v1_1.jpeg' (dev) or '/HongHe/img/v1_1.jpeg' (gh-pages)
  inject('imgPath', filename => `${base}img/${filename}`)
}
