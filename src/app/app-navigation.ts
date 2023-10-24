import { ISiteMapItem } from "./shared/interfaces/ISiteMapItem"

export const sitemap:ISiteMapItem[] = [
    {
        route: '/home',
        title: 'Inicio',
        icon: 'home'
    },
    {
        route: '/sale',
        title: 'Ventas',
        icon: 'shopping_cart'
    },
    {
        route: '/buy',
        title: 'Compras',
        icon: 'storefront',
        children: [
            {
                route: '/buy/purchase',
                title: 'Registrar Compra',
            },
            {
                route: '/buy/vendor',
                title: 'Proveedores',
            }
        ]
    },
    {
        route: '/product',
        title: 'Productos',
        icon: 'inventory_2',
        children: [
            {
                route: '/product/list',
                title: 'Catalogo Productos',
            },
            {
                route: '/product/inventory',
                title: 'Inventario',
            },
            {
                route: '/product/store',
                title: 'Almacenes',
            },
        ]
    },
    {
        route: '/master',
        title: 'Otros Maestros',
        icon: 'list',
        children: [
            {
                route: '/master/telephony',
                title: 'Telefonias',
            },
            {
                route: '/master/bank',
                title: 'Bancos',
            }
        ]
    },
    {
        route: '/user',
        title: 'Usuarios',
        icon: 'group'
    },
]