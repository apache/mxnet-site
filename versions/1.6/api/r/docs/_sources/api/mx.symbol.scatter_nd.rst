

``mx.symbol.scatter_nd``
================================================

Description
----------------------

Scatters data into a new tensor according to indices.

Given `data` with shape `(Y_0, ..., Y_{K-1}, X_M, ..., X_{N-1})` and indices with shape
`(M, Y_0, ..., Y_{K-1})`, the output will have shape `(X_0, X_1, ..., X_{N-1})`,
where `M <= N`. If `M == N`, data shape should simply be `(Y_0, ..., Y_{K-1})`.

The elements in output is defined as follows::

	 output[indices[0, y_0, ..., y_{K-1}],
	 ...,
	 indices[M-1, y_0, ..., y_{K-1}],
	 x_M, ..., x_{N-1}] = data[y_0, ..., y_{K-1}, x_M, ..., x_{N-1}]
	 
	 all other entries in output are 0.
	 
.. warning::

	 If the indices have duplicates, the result will be non-deterministic and
	 the gradient of `scatter_nd` will not be correct!!
	 
	 

**Example**::

	 
	 data = [2, 3, 0]
	 indices = [[1, 1, 0], [0, 1, 0]]
	 shape = (2, 2)
	 scatter_nd(data, indices, shape) = [[0, 0], [2, 3]]
	 
	 data = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
	 indices = [[0, 1], [1, 1]]
	 shape = (2, 2, 2, 2)
	 scatter_nd(data, indices, shape) = [[[[0, 0],
	 [0, 0]],
	 
	 [[1, 2],
	 [3, 4]]],
	 
	 [[[0, 0],
	 [0, 0]],
	 
	 [[5, 6],
	 [7, 8]]]]
	 
Usage
----------

.. code:: r

	mx.symbol.scatter_nd(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol                                          |
|                                        | data                                                       |
+----------------------------------------+------------------------------------------------------------+
| ``indices``                            | NDArray-or-Symbol                                          |
|                                        | indices                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``shape``                              | Shape(tuple), required.                                    |
|                                        |                                                            |
|                                        | Shape of output.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


