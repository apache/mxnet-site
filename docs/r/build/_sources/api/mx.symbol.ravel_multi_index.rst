.. raw:: html



``mx.symbol.ravel_multi_index``
==============================================================

Description
----------------------

Converts a batch of index arrays into an array of flat indices. The operator follows numpy conventions so a single multi index is given by a column of the input matrix.

**Example**::
	 
	 A = [[3,6,6],[4,5,1]]
	 ravel(A, shape=(7,6)) = [22,41,37]
	 

Usage
----------

.. code:: r

	mx.symbol.ravel_multi_index(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Batch of multi-indices                                     |
+----------------------------------------+------------------------------------------------------------+
| ``shape``                              | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | Shape of the array into which the multi-indices apply.     |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/master/src/operator/tensor/ravel.cc#L41


.. disqus::
   :disqus_identifier: mx.symbol.ravel_multi_index
