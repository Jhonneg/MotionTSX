import { useMatch } from "react-router-dom";
import { Page } from "../utils/types";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import startPageScaffold from "./startPageScaffold.json"
import styles from "../utils.module.css"
import {Loader}

type InjectedProps = {
  initialState: Page;
};

type PropsWithoutInject<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export function withInitialState<TProps>(
  WrappedComponent: React.ComponentType<
    PropsWithoutInject<TProps> & InjectedProps
  >
) {
  return (props: PropsWithoutInject<TProps>) => {
    const match = useMatch("/:slug");
    const pageSlug = match ? match.params.slug : "start";
    const [initialState, setInitialState] = useState<Page|null>();
    const [isLoading, setIsLoading] = useState(true);
      const [error, setError] = useState<Error | undefined>();
      

      useEffect(() => {
          setIsLoading(true)
          async function fetchInitialState() {
              try {
                  const { data: userData } = await supabase.auth.getUser()
                  const user = userData.user
                  if (!user) {
                      throw new Error("User not logged in")
                  }
                  
                  const { data } = await supabase.from("pages").select("title, id, cover, nodes, slug").match({ slug: pageSlug, created_by: user.id })
                  if (!data && pageSlug === "start") {
                      const result = await supabase.from("pages").insert({
                          ...startPageScaffold,
                          slug: "start",
                          created_by: user.id
                      }).single()
                      setInitialState(result?.data)
                  } else {
                      setInitialState(data)
                  }
            } catch (e) {
                if (e instanceof Error) {
                    setError(e)
                }
              };
          }, [pageSlug])
      if (isLoading) {
          return (<div className={StyleSheet.centeredFlex}>
              <Loader/>
          </div>)
      }
  };
}
