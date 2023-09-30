interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage - {slug}
      Sortorder={sortOrder}
    </div>
  );
};

export default ProductPage;
