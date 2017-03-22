import { SupplierDiscoveryServicePage } from './app.po';

describe('supplier-discovery-service App', () => {
  let page: SupplierDiscoveryServicePage;

  beforeEach(() => {
    page = new SupplierDiscoveryServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
