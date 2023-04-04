import { people } from '../data.js';

export const getPeople = (req, res) => {
  res.json(people);
};

export const postInPeople = (req, res) => {
  const { name } = req.body;
  if (!name)
    return res
      .status(400)
      .json({ success: false, msg: 'please, provide a name' });
  if (name) return res.status(200).send({ success: true, person: name });
};

export const putInPeople = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((e) => e.id === Number(id));

  if (!person)
    return res
      .status(404)
      .json({ success: false, msg: `no person with id: ${id}` });

  const newPeople = people.map((e) => {
    if (e.id === Number(id)) {
      e.name = name;
    }
    return people;
  });

  res.status(200).json({ success: true, data: newPeople });
};

export const deleteInPeople = (req, res) => {
  const { id } = req.params;
  const person = people.find((e) => e.id === Number(id));

  if (!person)
    return res
      .status(404)
      .json({ success: false, msg: `There's no data with the id: ${id}` });

  const newPeople = people.filter((e) => e.id !== Number(id));
  res.status(200).json(newPeople);
};
