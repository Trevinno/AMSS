export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Retratos " },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Animales" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Naturaleza" },
  { _id: "5b21ca3eeb7f6fbccd471821", name: "Anatomia" },
  { _id: "5b21ca3eeb7f6fbccd471822", name: "Cultura Pop" },
  { _id: "5b21ca3eeb7f6fbccd471823", name: "Caricaturas" },
  { _id: "5b21ca3eeb7f6fbccd471824", name: "Comics" }
];

export function getGenres() {
  return genres.filter(g => g);
}
