const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  // find all tags
router.get('/', async (req, res) => {
  try{
    const tagData = await Tag.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(tagData);

  } catch (err) {
    res.status(418).json(err);
  }
});
// get by id
router.get('/:id', async (req, res) => {
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    res.status(200).json(tagData);

  } catch (err) {
    res.status(418).json(err);
  }
});
  // create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(418).json(err);
  }
});
  // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      },
    });
    res.status(200).json(updateTag);
  } catch (err) {
    res.status(418).json(err);
  }
});
  // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(418).json(err);
  }
});

module.exports = router;
