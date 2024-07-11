import { test, expect, chromium, Browser, Page, BrowserContext } from '@playwright/test';
import Apple_func from '../../.github/Page/MegaMenu/Apple_functional';
import Filters from '../../.github/Page/Common_Module/Filters';
import Desktop from '../../.github/Page/Desktop/Desktop';
import SmartWatch from '../../.github/Page/Smart_Watched/smart_watch';



test.describe('Verify Desktop Page Functionality And UI Elements', () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;
  let apple_func: Apple_func;
  let filters: Filters;
  let desktop: Desktop;
  let smart_watch: SmartWatch;

  

  test.beforeEach(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    apple_func = new Apple_func(page);
    filters = new Filters(page);
    desktop = new Desktop(page);
    smart_watch = new SmartWatch(page);

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  });

  test.afterEach(async () => {
    await browser.close();
  });

  test('Verify that the user navigation to the Smart Watch Page from the Mega Menu', async () => {

    await smart_watch.navigateToSmartWatch();
  });

  test('Verify that the website logo is displayed correctly', async () => {

    await smart_watch.navigateToSmartWatch();
    await smart_watch.checkLogo();
  });

  test('Verify that the header search is working correctly', async () => {

    await smart_watch.navigateToSmartWatch();
    const search = 'Smart Watch';
    await smart_watch.verifyHeaderSearch(search);
  });

  test('Verify that "Phones & PDAs" is the page title', async () => {

    await smart_watch.navigateToSmartWatch();
    await smart_watch.verifyPageTitle();
  });

  test('Verify that the "Phones & PDAs" is the current page name', async () => {

    await smart_watch.navigateToSmartWatch();
    await smart_watch.verifyPageName();
  });

  test('Verify that the Smart Watch promotion image is visible', async () => {

    await smart_watch.navigateToSmartWatch();
    await smart_watch.verifyimage();
  });

  test('Verify that the Smart Watch Products are listed on the page', async () => {

    await smart_watch.navigateToSmartWatch();
    await filters.verifyProductCount();
    await smart_watch.verifySmartWatchProducts();
  });
 
  test('Verify that the Product Count of the page (Page element Name Show: number 15,25,50,75)', async () => {

    await smart_watch.navigateToSmartWatch();
    await filters.verifyProductCount();
    const count = '50';
    await smart_watch.showUpProduct(count);

  });

  test('Verify that filters are available and work correctly', async ({ page }) => {

    await smart_watch.navigateToSmartWatch();
    await smart_watch.checkFilterList();
  });

  test('Verify that the Product Sorting Options is visible on the page', async () => {

    await smart_watch.navigateToSmartWatch();
    const sort = 'Newest';
    await smart_watch.sortByProducts(sort);
  });

  test('Verify that the Filter Functionality by Setting minimum price range is working correctly', async () => {

    await smart_watch.navigateToSmartWatch();
    const min = '400';
    await filters.setMinValue(min);

  });

  test('Verify that the Filter Functionality by Setting maximum price range is working correctly', async () => {

    await smart_watch.navigateToSmartWatch();
    const max = '1009'
    await filters.setMaxValue(max);

  });

  test('Verify that the manufacturer filter is visible and functional', async ({ page }) => {

    await smart_watch.navigateToSmartWatch();
    await filters.verifyProductCount();
    const product = 'Apple';
    await filters.checkManufacturerProducts(product); 
  });


  test('Verify that the Filter Functionality by Search is working correctly', async ({ page }) => {

    await smart_watch.navigateToSmartWatch();
    const search = 'Desktop';
    await smart_watch.checksearchfilter(search);
  });

  test('Verify that the Filter Functionality by Color is working correctly', async () => {

    await smart_watch.navigateToSmartWatch();
    // Blue, Pink, Black, Orange, Red, Brown, Green, Yellow
    const color = 'Green';
    await smart_watch.checkProductColor(color);

  });

  test('Verify that the Filter Functionality by Availability of Stock is working correctly', async () => {

    await smart_watch.navigateToSmartWatch();
    // In stock, Out Of Stock, 2-3 Days, Pre-Order
    const availability = 'In stock';
    await smart_watch.checkProductAvailability(availability);

  });

  test('Verify that the Filter Functionality by Size of Product is working correctly', async () => {

    await smart_watch.navigateToSmartWatch();
    // L, M, S, XL, XXL
    const size = 'S';
    await smart_watch.checkSizeOfProduct(size);
  });
 
  test('Verify that the user can change the view product displaying on the page grid view to list view', async () => {

    await smart_watch.navigateToSmartWatch();
    await filters.gridToList();
    await filters.listToGrid(); 
    await filters.gridToList();   
  });

  test.skip('Verify that the user can change the view product displaying on the page list view to grid view', async () => {

    await smart_watch.navigateToSmartWatch();
    await filters.listToGrid();
  });

  test('Verify that the breadcrumb navigation path displays the Smart Watch page path', async () => {

    await smart_watch.navigateToSmartWatch();
    const path = 'Phones & PDAs';
    await filters.verifybreadcrumbpath(path); 
  });


  test('Verify that the user navigates to the Laptops page by clicking on the Laptops link available on the side navigation menu', async () => {

    await smart_watch.navigateToSmartWatch();
    await filters.checkLaptopsProducts();
  });
  
  test('Verify that the user navigates to the Components page by clicking on the Components link available on the side navigation menu', async () => {

    await smart_watch.navigateToSmartWatch();
    await filters.checkComponentsProducts();
  });

  test('Verify that the user navigates to the Tablets page by clicking on the Tablets link available on the side navigation menu', async () => {

    await smart_watch.navigateToSmartWatch();
    await filters.checkTabletsProducts();
  });

  test('Verify that the user navigates to the Software page by clicking on the Software link available on the side navigation menu', async () => {

    await smart_watch.navigateToSmartWatch();
    await filters.checkSoftwareProducts();
  });

  test('Verify that the user navigates to the Phones & PDAs page by clicking on the Phones & PDAs link available on the side navigation menu', async () => {

    await smart_watch.navigateToSmartWatch();
    await filters.checkPhonesPDAsProducts();
  });

  test('Verify that the user navigates to the Cameras page by clicking on the Cameras link available on the side navigation menu', async () => {

    await smart_watch.navigateToSmartWatch();
    await filters.checkCamerasProducts();
  });

  test('Verify that the user navigates to the MP3 Players page by clicking on the MP3 Players link available on the side navigation menu', async () => {

   await smart_watch.navigateToSmartWatch();
    await filters.checkMP3PlayersProducts();
  });

  test('Verify that the Pagination Functionality by Next button functionality is working correctly', async () => {

    await smart_watch.navigateToSmartWatch();
    await filters.checkNextPage();
    await filters.checkPreviousPage();
  });

  test('Verify that the Pagination Functionality by Previous button functionality is working correctly', async () => {

    await smart_watch.navigateToSmartWatch();
    await filters.checkPreviousPage();
  });
   
});
