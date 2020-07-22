

``mx.symbol.rint``
====================================

Description
----------------------

Returns element-wise rounded value to the nearest integer of the input.


.. note::    - For input ``n.5`` ``rint`` returns ``n`` while ``round`` returns ``n+1``.    - For input ``-n.5`` both ``rint`` and ``round`` returns ``-n-1``.


**Example**::

	 
	 rint([-1.5, 1.5, -1.9, 1.9, 2.1]) = [-2.,  1., -2.,  2.,  2.]
	 
	 The storage type of ``rint`` output depends upon the input storage type:
	 
	- rint(default) = default
	- rint(row_sparse) = row_sparse
	- rint(csr) = csr
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.rint(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L799

