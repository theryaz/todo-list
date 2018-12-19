import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface RouterStateUrl {
	url: string;
	params: Params;
	queryParams: Params;
}

export class RouterSerializer implements RouterStateSerializer<RouterStateUrl> {
	serialize(router_state: RouterStateSnapshot): RouterStateUrl {
		let route = router_state.root;

		while (route.firstChild) {
			route = route.firstChild;
		}

		const {
			url,
			root: { queryParams },
		} = router_state;
		const { params } = route;

		return { url, params, queryParams };
	}
}
