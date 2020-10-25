import { NgxsModule, Action, Selector, State, StateContext } from "@ngxs/store";
import { ArticleStateModel } from "./article-state-model";
import { AddArticle, DelArticle } from "../actions/article-action";

@State<ArticleStateModel>({
  name: "listArticle",
  defaults: {
    articles: []
  }
})
export class ArticleState {
  @Selector()
  static getNbArticle(state: ArticleStateModel): number {
    return state.articles.length;
  }

  @Action(AddArticle)
  add(
    { getState, patchState }: StateContext<ArticleStateModel>,
    { payload }: AddArticle
  ) {
    const state = getState();
    patchState({
      // créer un nouveau tableau
      // l'opérateur ... permet de consituer une liste d'élement du tableau
      articles: [...state.articles, payload]
    });
  }

  @Action(DelArticle)
  del(
    { getState, patchState }: StateContext<ArticleStateModel>,
    { payload }: DelArticle
  ) {
    const state = getState();
    patchState({
      // supprimer le payload dans users
      articles: state.articles.filter(
        item => item.nom != payload.nom && item.type != payload.type
      )
    });
  }
}
