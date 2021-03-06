import FilterDisplay from '@/components/FilterDisplay';
import render from '../../test-utils/render';

describe('FilterDisplay', () => {
  const options = {
    propsData: {
      query: {
        license: 'cc0',
        license_type: 'foo',
        categories: 'foo',
        extension: 'foo',
        aspect_ratio: 'foo',
        size: 'foo',
        source: 'foo',
      },
    },
    mocks: {
      $store: {
        state: {
          query: {
            q: 'foo',
            provider: 'foo',
          },
          filters: {
            licenses: [{ code: 'foo', name: 'bar', checked: false }],
            licenseTypes: [{ code: 'foo', name: 'bar', checked: false }],
            categories: [{ code: 'foo', name: 'bar', checked: false }],
            extensions: [{ code: 'foo', name: 'bar', checked: false }],
            aspectRatios: [{ code: 'foo', name: 'bar', checked: false }],
            sizes: [{ code: 'foo', name: 'bar', checked: false }],
            providers: [{ code: 'foo', name: 'bar', checked: false }],
            searchBy: { creator: true },
          },
        },
        dispatch: jest.fn(),
      },
    },
  };
  it('should render correct contents', () => {
    const wrapper = render(FilterDisplay, options);
    expect(wrapper.find('.filter-display'));
    expect(wrapper.find({ name: 'filter-block' }).vm).toBeDefined();
  });
});
