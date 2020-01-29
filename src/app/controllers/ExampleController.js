class ExampleController {
  index(req, res) {
    return res.json({ result: 'ITS OK!' });
  }

  show() {}

  store() {}

  update() {}

  delete() {}
}

export default new ExampleController();
