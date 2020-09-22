

``graph.viz``
==========================

Description
----------------------

Convert symbol to Graphviz or visNetwork visualisation.

Usage
----------

.. code:: r

	graph.viz(

	  symbol,

	  shape = NULL,

	  direction = "TD",

	  type = "graph",

	  graph.width.px = NULL,

	  graph.height.px = NULL

	)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``symbol``                             | a ``string`` representing the symbol of a model.           |
+----------------------------------------+------------------------------------------------------------+
| ``shape``                              | a ``numeric`` representing the input dimensions to the     |
|                                        | symbol.                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``direction``                          | a ``string`` representing the direction of the graph,      |
|                                        | either TD or                                               |
|                                        | LR.                                                        |
+----------------------------------------+------------------------------------------------------------+
| ``type``                               | a ``string`` representing the rendering engine of the      |
|                                        | graph, either graph or                                     |
|                                        | vis.                                                       |
+----------------------------------------+------------------------------------------------------------+
| ``graph.width.px``                     | a ``numeric`` representing the size (width) of the graph.  |
|                                        | In                                                         |
|                                        | pixels                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``graph.height.px``                    | a ``numeric`` representing the size (height) of the graph. |
|                                        | In                                                         |
|                                        | pixels                                                     |
+----------------------------------------+------------------------------------------------------------+

Value
----------

a graph object ready to be displayed with the ``print`` function.


