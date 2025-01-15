import layouts from "@/components/layouts/model";
import templates from "@/components/templates/model";
import { $isPending, $posts, changePage } from "@/models/posts/model";
import { $settings } from "@/models/settings/model";
import { Button, Pagination, Spinner } from "@nextui-org/react";
import { useUnit } from "effector-react";

export const Posts = () => {
  const [posts, settings, isLoading] = useUnit([$posts, $settings, $isPending]);

  if (isLoading && !posts) return <Spinner className="m-auto" />;

  if (!posts || !settings) return null;

  const { page, totalPages, hasMore } = posts;
  const { navigation } = settings;

  const isPagination = navigation === "pagination";
  const isLoadMore = navigation === "load-more";

  const Layout = layouts[settings.layout];
  const Template = templates[settings.template];

  const handleLoadMore = () => {
    if (!isLoading) {
      changePage(page + 1);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Layout settings={settings} posts={posts.data}>
        {(post) => <Template key={post.id} post={post} settings={settings} />}
      </Layout>
      {isPagination && (
        <Pagination
          className="m-auto"
          page={page}
          total={totalPages}
          onChange={changePage}
        />
      )}
      {isLoadMore && hasMore && (
        <Button
          className="w-fit m-auto"
          isLoading={isLoading}
          color="primary"
          onPress={handleLoadMore}
        >
          {isLoading ? "Загрузка" : "Загрузить ещё"}
        </Button>
      )}
    </div>
  );
};
