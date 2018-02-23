import NotificationService, {
  NOTIF_SHOPPINGLIST_CHANGED
} from "./notification-service";
let ns = new NotificationService();
let instance = null;
var shoppingList = [];

class DataService {
  constructor() {
    if (!instance) {
      instance = this;
    } //singleton for adding products to the shopping cart
    return instance;
  }

  itemOnShoppingList = item => {
    for (var x = 0; x < shoppingList.length; x++) {
      if (shoppingList[x].title === item.title) {
        return true; //findBy title
      }
    }
    return false;
  };

  addShoppingListItem = item => {
    shoppingList.push(item);
    ns.postNotification(NOTIF_SHOPPINGLIST_CHANGED, shoppingList);
  };

  removeShoppingListItem = item => {
    for (var x = 0; x < shoppingList.length; x++) {
      if (shoppingList[x].title === item.title) {
        shoppingList.splice(x, 1);
        ns.postNotification(NOTIF_SHOPPINGLIST_CHANGED, shoppingList);
        break;
      }
    }
  };
}

export default DataService;
