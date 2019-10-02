

``mx.symbol.cast_storage``
====================================================

Description
----------------------

Casts tensor storage type to the new type.

When an NDArray with default storage type is cast to csr or row_sparse storage,
the result is compact, which means:

	- for csr, zero values will not be retained
	- for row_sparse, row slices of all zeros will not be retained

The storage type of ``cast_storage`` output depends on stype parameter:

	- cast_storage(csr, 'default') = default
	- cast_storage(row_sparse, 'default') = default
	- cast_storage(default, 'csr') = csr
	- cast_storage(default, 'row_sparse') = row_sparse
	- cast_storage(csr, 'csr') = csr
	- cast_storage(row_sparse, 'row_sparse') = row_sparse


**Example**::

	 
	 dense = [[ 0.,  1.,  0.],
	 [ 2.,  0.,  3.],
	 [ 0.,  0.,  0.],
	 [ 0.,  0.,  0.]]
	 
	 # cast to row_sparse storage type
	 rsp = cast_storage(dense, 'row_sparse')
	 rsp.indices = [0, 1]
	 rsp.values = [[ 0.,  1.,  0.],
	 [ 2.,  0.,  3.]]
	 
	 # cast to csr storage type
	 csr = cast_storage(dense, 'csr')
	 csr.indices = [1, 0, 2]
	 csr.values = [ 1.,  2.,  3.]
	 csr.indptr = [0, 1, 3, 3, 3]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.cast_storage(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input.                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``stype``                              | {'csr', 'default', 'row_sparse'}, required.                |
|                                        |                                                            |
|                                        | Output storage type.                                       |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/cast_storage.cc#L71

