import { Locator, Page } from 'playwright';
import { test, expect } from '@playwright/test';

class SmartWatch {
    private page: Page;
    private megaMenuLocator: Locator;
    private smartWatchLinkLocator: Locator;
    private smartWatchPageURL: string;
    private productTitle: string;
    private smartWatchHeadingLocator: Locator;
    private imageTitleLocator: Locator;
    private searchInputLocator: Locator;
    private showupDropdownLocator: Locator;
    private sortbyFilterLocator: Locator;
    private searchFilterLocator: Locator;
    private colorFilterLocator: Locator;
    private sizeFilterLocator: Locator;
    private availabilityFilterLocator: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.megaMenuLocator = page.locator('//span[contains(text(), "Mega Menu")]');
        this.smartWatchLinkLocator = page.getByRole('link', { name: 'Smart Watch' });
        this.smartWatchPageURL = 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=24';
        this.productTitle = 'Phones & PDAs';
        this.smartWatchHeadingLocator = page.getByRole('heading', { name: 'Phones & PDAs' });
        this.imageTitleLocator = page.getByTitle('Apple Cinema 30"');
        this.searchInputLocator = page.locator('#mz-filter-panel-0-3').getByPlaceholder('Search');
        this.showupDropdownLocator = page.locator('//select[@id="input-limit-212402"]');
        this.sortbyFilterLocator = page.locator('//select[@id="input-sort-212403"]');
        this.searchFilterLocator = page.locator('#mz-filter-panel-0-3').getByPlaceholder('Search')
        this.colorFilterLocator = page.locator('#mz-filter-panel-0-4').getByRole('img', { name: 'Green' });
        this.sizeFilterLocator = page.locator('#mz-filter-panel-0-6').getByText('');
        this.availabilityFilterLocator = page.locator('#mz-filter-panel-0-5 div').filter({ hasText: '' }).nth(2);

    }

    async navigateToSmartWatch(){

        await this.megaMenuLocator.hover();
        await this.smartWatchLinkLocator.click();
        await expect(this.page).toHaveURL(this.smartWatchPageURL);
        console.log('User Successfully Navigated to the Smart Watch Page through Mega Menu...');
    }

    async verifyPageTitle() {
        const title = await this.page.title();
        console.log(`Page title is: ${title}`);
        if (title.includes(this.productTitle)) {
            console.log('Navigated to '+title+' page successfully.');
        } else {
            console.log('Failed to navigate to '+title+' page.');
        }
    }

    async verifyPageName() {
        await expect(this.smartWatchHeadingLocator).toBeVisible();
        const pagename = await this.smartWatchHeadingLocator.textContent();
        console.log(`Current Page Verified and the Page name is: ${pagename}`);
    }

    async verifyimage() {
        await expect(this.imageTitleLocator).toBeVisible();
        console.log('Smart Watch  Page Promotional image found....');
    }

    async verifySmartWatchProducts() {
        await this.page.waitForLoadState();
        const products: string[] = await this.page.$$eval('.product-thumb .caption a', elements => elements.map(el => (el as HTMLElement).innerText));
        console.log('Smart Watch  Products:');
        products.forEach(product => console.log(product));
    }

    async verifyProductCount() {
        await this.page.waitForLoadState();
        const productCount = await this.page.$$eval('.product-thumb', products => products.length);
        console.log(`Number of Smart Watch  products on the page: ${productCount}`);
    }
    
    async checksearchfilter(search: string) {
        await this.searchInputLocator.click();
        console.log('Search filter found.......')
        await this.searchInputLocator.fill(search);
        console.log('Data entered in search bar');
        await this.searchInputLocator.press('Enter');
        await this.page.waitForTimeout(2000);
    }

    async checkFilterList(){

        await this.page.waitForLoadState();
        await expect(this.page.locator('#mz-filter-0 div').filter({ hasText: 'Filter' })).toBeVisible();
        await this.page.locator('#mz-filter-0 div').filter({ hasText: 'Filter' }).click();
        await this.page.locator('#mz-filter-0 div').filter({ hasText: 'Filter' }).click();

    }

    async checkLogo(){
        
        await expect(this.page.getByRole('link', { name: 'Poco Electro' })).toBeVisible();
        await this.page.getByRole('link', { name: 'Poco Electro' }).click();

        console.log('User successfully Navigate to the Home Page By Clicking on the Logo Icon');

    }

    async showUpProduct(count: string) {
        await this.page.waitForLoadState();
        await expect(this.showupDropdownLocator).toBeVisible();
        await this.showupDropdownLocator.selectOption({ label: count });
        console.log('Products show filter applied.....');
        console.log("Desired Show Selected........."+ count);
    }

    async sortByProducts(sortBy: string) {
        await expect(this.sortbyFilterLocator).toBeVisible();
        await this.sortbyFilterLocator.selectOption({ label: sortBy });
        console.log('Products sorted by filter applied.');
        await this.page.waitForLoadState();
        console.log("Desired SortBy Selected........."+ sortBy);
        
    }

    async verifyHeaderSearch(search){
        await this.page.getByRole('textbox', { name: 'Search For Products' }).click();
        await this.page.getByRole('textbox', { name: 'Search For Products' }).fill(search);
        await this.page.getByRole('textbox', { name: 'Search For Products' }).press('Enter');
    }

    async checkSearchFilter(search: string) {
        await this.searchFilterLocator.isVisible();
        console.log('Search filter found.');
        await this.searchFilterLocator.fill(search);
        console.log('Data entered in search bar.');
        await this.searchFilterLocator.press('Enter');
        await  this.page.waitForLoadState();
    }

    async checkProductColor(color: string) {
        await this.page.locator('#mz-filter-content-0').getByText('Color').isVisible();
        await expect(this.page.locator('#mz-filter-panel-0-4').getByRole('img', { name: color })).toBeVisible();
        await this.colorFilterLocator.click();
        console.log('Product color selected successfully.');
        await  this.page.waitForLoadState();
    }

    async checkProductAvailability(availability: string) {
        await this.page.locator('#mz-filter-content-0').getByText('Availability');
        await this.availabilityFilterLocator.getByText(availability).click();
        console.log('Product availability selected successfully.....'+availability);
        await  this.page.waitForLoadState();
    }

    async checkSizeOfProduct(size: string) {
        await this.page.locator('#mz-filter-content-0').getByText('Size');
        await expect(this.page.locator('#mz-filter-panel-0-6').getByText(size, { exact: true })).toBeVisible();
        await this.sizeFilterLocator.getByText(size).click();
        console.log('Product size selected successfully......'+size);
        await  this.page.waitForLoadState();
    }


}

export default SmartWatch;
