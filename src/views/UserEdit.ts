import { View } from "./View";
import { UserProps, User } from "../models/User";

export class UserEdit extends View<User, UserProps> {
	template(): string {
		return `<div>
            <div class="user-show"></div>
            <div class="user-form"></div>
        </div>`;
	}
}
