import { test, expect, chromium, Browser, Page, BrowserContext } from '@playwright/test';
import Apple_func from '../../.github/Page/MegaMenu/Apple_functional';
import Filters from '../../.github/Page/Common_Module/Filters';
import Desktop from '../../.github/Page/Desktop/Desktop';
import SmartWatch from '../../.github/Page/Smart_Watched/smart_watch';
import TopCollection from '../../.github/Page/Home/Top_Collection';



test.describe('Verify Desktop Page Functionality And UI Elements', () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;
  let apple_func: Apple_func;
  let filters: Filters;
  let desktop: Desktop;
  let smart_watch: SmartWatch;
  let top_collection: TopCollection;

  

  test.beforeEach(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    apple_func = new Apple_func(page);
    filters = new Filters(page);
    desktop = new Desktop(page);
    smart_watch = new SmartWatch(page);
    top_collection = new TopCollection(page);

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  });

  test.afterEach(async () => {
    await browser.close();
  });

  test.skip('Verify that the Top Collection section loads properly', async () => {

    await top_collection.verifyTopCollectionSection();
  });

  test.skip('Verify that the promotional image and check some products are displayed as sample', async () => {

    await top_collection.verifyPromotionalImageAndProduct();
  });

  test.skip('Verify that the user can add the products to the cart from the hover menu', async () => {

    await top_collection.verifyTopCollectionSection();
    await top_collection.addToCart();   
  });

  test.skip('Verify that the user navigate the product details page by clicking on the product', async () => {

    await top_collection.navigateToProductDetails();
  });

  test.skip('Verify that the cart updates correctly after adding any product', async () => {

    await top_collection.navigateToProductDetails();
    await top_collection.verifycartupdate();
  });

  test.skip('Verify that the hover menu displays the product image on hovering the product', async () => {

    await top_collection.verifyTopCollectionSection();
    await top_collection.verifyHoverMenu();
   
  });

  test.skip('Verify that the "Quick View" feature works', async () => {

    await top_collection.verifyTopCollectionSection();
    await top_collection.verifyQuickView();  
    await top_collection.verifyModel();
   
  });

  test.skip('Verify that the correct behavior of scroll products', async () => {

    await top_collection.verifyTopCollectionSection();
    await top_collection.verifyproductscroll();
   
  });

  test('Verify that the User can increase or decrease the quantity of product through quick view model', async () => {

    await top_collection.verifyTopCollectionSection();
    await top_collection.verifyQuickView();  
    await top_collection.verifyModel();
    await top_collection.changeProductQuantity();
   
  });



 
   
});
