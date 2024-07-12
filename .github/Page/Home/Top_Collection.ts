import { Locator, Page } from 'playwright';
import { test, expect } from '@playwright/test';

class TopCollection {
    private page: Page;
    private Topcollectionpromotion: Locator;
    private productImageLocator: Locator;
    private addToCartProduct: Locator
    private product: Locator;
    private quichView: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.Topcollectionpromotion = page.getByRole('link', { name: 'Apple Ipad Pro' });
        this.productImageLocator = page.locator('//*[@id="mz-product-listing-image-39213264-0-0"]/div/div[1]/img');
        this.addToCartProduct = page.locator('//*[@id="swiper-wrapper-3989510ee8403bbc"]/div[1]/div/div[1]/div[2]/button[@class="btn btn-cart cart-28"]');
        this.product = page.locator('//*[@id="mz-product-listing-image-39213264-0-0"]/div/div[1]/img');
        this.quichView = page.locator('//*[@id="swiper-wrapper-dc9cbe51625961052"]/div[1]/div/div[1]/div[2]/button[3]');
    
    
    }

    async verifyTopCollectionSection(){

        await expect(this.page.getByText('Top Collection Popular Latest')).toBeVisible();
        await this.page.getByRole('link', { name: 'Latest' }).isVisible();
        await this.page.getByRole('link', { name: 'Latest' }).click();
        console.log('Lastest tab found and Clicked Successfully');

        await this.page.getByRole('link', { name: 'Best seller' }).isVisible();
        await this.page.getByRole('link', { name: 'Best seller' }).click();
        console.log('Best Seller tab found and Clicked Successfully');

        await this.page.getByRole('link', { name: 'Popular' }).isVisible();
        await this.page.getByRole('link', { name: 'Popular' }).click();
        console.log('Popular tab found and Clicked Successfully');
    }

    async verifyPromotionalImageAndProduct() {
        
        await expect(this.page.getByRole('link', { name: 'Apple Ipad Pro' })).toBeVisible();
        await this.Topcollectionpromotion.hover();
        await this.Topcollectionpromotion.click();

        await this.page.getByLabel('Home').click();
        await this.page.getByRole('link', { name: 'Popular' }).click();

        await expect(this.page.locator('#entry_213268')).toBeVisible();
        await expect(this.page.locator('#entry_213270')).toBeVisible();

        console.log('User successfully Vefiy the Top Collection Page');

    }

    async addToCart() {
        await this.productImageLocator.waitFor({ state: 'visible' });
        await this.productImageLocator.hover();
        
        await this.page.getByLabel('1 / 24', { exact: true }).getByRole('button', { name: '' }).click();

        console.log('User successfully added the product to Cart');
      
    }


    async navigateToProductDetails() {

        await this.page.getByLabel('1 / 24', { exact: true }).getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC' }).click();
        await expect(this.page.locator('#entry_216826')).toBeVisible();
        await expect(this.page.getByText('Add to CartBuy now Compare')).toBeVisible();
        await expect(this.page.locator('#image-gallery-216811').getByRole('link', { name: 'HTC Touch HD' }).first()).toBeVisible();

        console.log('User successfully Navigate to the Product Details page');
       
    }

    async verifycartupdate() {

        await expect(this.page.locator('#entry_216826')).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'HTC Touch HD' }).first()).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Add to Cart' })).toBeVisible();
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();
        await expect(this.page.getByText('Success: You have added HTC Touch HD to your shopping cart! View Cart Checkout')).toBeVisible();
        await this.page.getByRole('link', { name: 'View Cart ' }).click();
        await this.page.locator('ol').isVisible();
        await expect(this.page.getByText('Shopping Cart (0.15kg) Image')).toBeVisible();

        console.log('Product successfully Added to the cart');

        
    }

    async verifyQuickView() {
        
        await this.productImageLocator.waitFor({ state: 'visible' });
        await this.productImageLocator.hover();
        console.log('User Hover the Image......');
        await this.page.getByLabel('1 / 24', { exact: true }).getByRole('button', { name: '' }).click();

        console.log('Quick View Model Successfully Open');
    }
    
    async verifyModel() {

        await expect(this.page.locator('#entry_212953')).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'close' })).toBeVisible();
        // await this.page.getByRole('button', { name: 'close' }).click();

        console.log('Quick View Model Successfully Verified');
    }

    async verifyHoverMenu(){

        await expect(this.page.getByRole('link', { name: 'Apple Ipad Pro' })).toBeVisible();
        await this.Topcollectionpromotion.hover();

    }

    async verifyproductscroll(){
        
        await this.page.locator('#mz-product-listing-39213264 div').filter({ hasText: 'Top Collection Popular Latest' }).locator('a').nth(4).click();
        await this.page.locator('#mz-product-listing-39213264 div').filter({ hasText: 'Top Collection Popular Latest' }).locator('a').nth(3).click();
        await this.page.locator('#mz-product-listing-39213264 div').filter({ hasText: 'Top Collection Popular Latest' }).locator('a').nth(4).click();
        await this.page.getByRole('link', { name: 'Latest' }).click();
        await this.page.locator('#mz-product-listing-39213264 div').filter({ hasText: 'Top Collection Popular Latest' }).locator('a').nth(4).click();
        await this.page.locator('#mz-product-listing-39213264 div').filter({ hasText: 'Top Collection Popular Latest' }).locator('a').nth(4).click();
        await this.page.locator('#mz-product-listing-39213264 div').filter({ hasText: 'Top Collection Popular Latest' }).locator('a').nth(4).click();
        await this.page.locator('#mz-product-listing-39213264 div').filter({ hasText: 'Top Collection Popular Latest' }).locator('a').nth(3).click();
        await this.page.locator('#mz-product-listing-39213264 div').filter({ hasText: 'Top Collection Popular Latest' }).locator('a').nth(3).click();
        await this.page.getByRole('link', { name: 'Best seller' }).click();
        await this.page.locator('#mz-product-listing-39213264 div').filter({ hasText: 'Top Collection Popular Latest' }).locator('a').nth(4).click();
        await this.page.locator('#mz-product-listing-39213264 div').filter({ hasText: 'Top Collection Popular Latest' }).locator('a').nth(4).click();
        await this.page.locator('#mz-product-listing-39213264 div').filter({ hasText: 'Top Collection Popular Latest' }).locator('a').nth(3).click();
        await this.page.locator('#mz-product-listing-39213264 div').filter({ hasText: 'Top Collection Popular Latest' }).locator('a').nth(3).click();
     

        console.log('User successfully use the scroll elements');

    }

    async changeProductQuantity(){

        await expect(this.page.getByLabel('Increase quantity')).toBeVisible();
        await this.page.getByLabel('Increase quantity').click();
        await this.page.getByLabel('Increase quantity').click();
        await this.page.getByLabel('Increase quantity').click();
        await this.page.getByLabel('Increase quantity').click();
        await this.page.getByLabel('Increase quantity').click();
        console.log('User successfully use the scroll elements');
        await this.page.getByLabel('Decrease quantity').click();
        await this.page.getByLabel('Increase quantity').click();
        console.log('User successfully use the scroll elements');
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();
        await this.page.getByRole('link', { name: 'View Cart' }).click();
    }



}

export default TopCollection;
