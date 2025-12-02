type Props = {
    params: { slug: string }
}

export default async function Blog({ params }: Props) {
    const { slug } = params;
    return <div>Loading...</div>;
}
