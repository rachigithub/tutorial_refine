import { GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerBindings, {
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeadlessInferencer } from "@refinedev/inferencer/headless";

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <Refine
          routerProvider={routerBindings}
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          resources={[
            {
                name: "blog_posts",
                list: "/blog-posts",
                show: "/blog-posts/show/:id",
                create: "/blog-posts/create",
                edit: "/blog-posts/edit/:id",
            },
          ]}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          <Routes>
            <Route path="blog-posts">
              <Route index element={<HeadlessInferencer />} />
              <Route
                path="show/:id"
                element={<HeadlessInferencer />}
              />
              <Route
                path="edit/:id"
                element={<HeadlessInferencer />}
              />
              <Route path="create" element={<HeadlessInferencer />} />
            </Route>
          </Routes>
          <RefineKbar />
          <UnsavedChangesNotifier />
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  );
};

export default App;
