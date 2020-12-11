<template>
  <div>
    <tree id="my-tree-id" :custom-options="customOptions" :nodes="nodes"></tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nodes: [
        {
          text: 'Root 1',
          nodes: [
            {
              text: 'Child 1',
              nodes: [
                {
                  text: 'Grandchild 1',
                },
                {
                  text: 'Grandchild 2',
                },
              ],
            },
            {
              text: 'Child 2',
            },
          ],
        },
        {
          text: 'Root 2',
        },
      ],
      customOptions: {
        icon: 'fa-folder',
        iconColor: '#007AD5',
        selectedIcon: 'fa-folder-open',
        selectedIconColor: '#2ECC71',
        addElemIcon: 'fa-plus',
        addElemIconColor: '#007AD5',
        style: {
          tree: 'overflow: hidden; border: none;',
          row: 'background-color: blue;',
        },
        treeEvents: {
          expanded: {
            state: true,
            fn: this.updateNodes,
          },
          collapsed: {
            state: true,
            fn: this.updateNodes,
          },
          checked: {
            state: true,
            fn: this.updateNodeChecked,
          },
        },
        events: {
          selected: {
            state: false,
            fn: null,
          },
          editableName: {
            state: true,
            calledEvent: 'expanded',
          },
        },
      },
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
