

``mx.symbol.linalg_extractdiag``
================================================================

Description
----------------------

Extracts the diagonal entries of a square matrix.
Input is a tensor *A* of dimension *n >= 2*.

If *n=2*, then *A* represents a single square matrix which diagonal elements get extracted as a 1-dimensional tensor.

If *n>2*, then *A* represents a batch of square matrices on the trailing two dimensions. The extracted diagonals are returned as an *n-1*-dimensional tensor.


.. note:: The operator supports float32 and float64 data types only.


**Example**::

	 
	 Single matrix diagonal extraction
	 A = [[1.0, 2.0],
	 [3.0, 4.0]]
	 
	 extractdiag(A) = [1.0, 4.0]
	 
	 extractdiag(A, 1) = [2.0]
	 
	 Batch matrix diagonal extraction
	 A = [[[1.0, 2.0],
	 [3.0, 4.0]],
	 [[5.0, 6.0],
	 [7.0, 8.0]]]
	 
	 extractdiag(A) = [[1.0, 4.0],
	 [5.0, 8.0]]
	 
	 

Usage
----------

.. code:: r

	mx.symbol.linalg_extractdiag(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``A``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Tensor of square matrices                                  |
+----------------------------------------+------------------------------------------------------------+
| ``offset``                             | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | Offset of the diagonal versus the main diagonal. 0         |
|                                        | corresponds to the main diagonal, a negative/positive      |
|                                        | value to diagonals below/above the main                    |
|                                        | diagonal.                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/la_op.cc#L495

