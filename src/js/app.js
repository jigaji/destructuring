export default function descriptionOfAbility(obj) {
  const result = [];
  obj.special.forEach((element) => {
    const { id, name, description = "Описание недоступно", icon } = element;
    const special = {
      id,
      name,
      description,
      icon,
    };
    result.push(special);
  });
  return result;
}
