Symbol
====================================================

Symbolic programming with computation graphs 
------------------------------------------------------



Get symbol attributes
-----------------------


========================================================  ==================================================================================================
:doc:`arguments <./arguments>`                            Get the arguments of symbol
:doc:`children <./children>`                              Gets a new grouped symbol whose output contains inputs to output nodes of the original symbol
:doc:`graph.viz <./graph.viz>`                            Convert symbol to Graphviz or visNetwork visualisation
:doc:`internals <./internals>`                            Get a symbol that contains all the internals
:doc:`is.mx.symbol <./is.mx.symbol>`                      Judge if an object is mx.symbol
:doc:`mx.symbol.infer.shape <./mx.symbol.infer.shape>`    Inference the shape of arguments, outputs, and auxiliary states
:doc:`mx.symbol.shape_array <./mx.symbol.shape_array>`    Returns a 1D int64 array containing the shape of data
:doc:`mx.symbol.size_array <./mx.symbol.size_array>`      Returns a 1D int64 array containing the size of data
:doc:`outputs <./outputs>`                                Get the outputs of a symbol
========================================================  ==================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   arguments
   children
   graph.viz
   internals
   is.mx.symbol
   mx.symbol.infer.shape
   mx.symbol.shape_array
   mx.symbol.size_array
   outputs

Create symbols
------------------


======================================================  ===========================================================================================
:doc:`mx.symbol.Group <./mx.symbol.Group>`              Create a symbol that groups symbols together
:doc:`mx.symbol.GroupNorm <./mx.symbol.GroupNorm>`      Group normalization
:doc:`mx.symbol.Variable <./mx.symbol.Variable>`        Create a symbolic variable with specified name
:doc:`mx.symbol.one_hot <./mx.symbol.one_hot>`          Returns a one-hot array
:doc:`mx.symbol.ones_like <./mx.symbol.ones_like>`      Return an array of ones with the same shape and type as the input array
:doc:`mx.symbol.zeros_like <./mx.symbol.zeros_like>`    Return an array of zeros with the same shape, type and storage type as the input array
======================================================  ===========================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.Group
   mx.symbol.GroupNorm
   mx.symbol.Variable
   mx.symbol.one_hot
   mx.symbol.ones_like
   mx.symbol.zeros_like

Manipulation of symbols
------------------------



Conversion
^^^^^^^^^^^^


==========================================================  ==================================================
:doc:`mx.apply <./mx.apply>`                                Apply symbol to the inputs
:doc:`mx.symbol.cast <./mx.symbol.cast>`                    Casts all elements of the input to a new type
:doc:`mx.symbol.cast_storage <./mx.symbol.cast_storage>`    Casts tensor storage type to the new type
:doc:`mx.symbol.load <./mx.symbol.load>`                    Load an mx.symbol object
:doc:`mx.symbol.load.json <./mx.symbol.load.json>`          Load an mx.symbol object from a json string
:doc:`mx.symbol.save <./mx.symbol.save>`                    Save an mx.symbol object
==========================================================  ==================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.apply
   mx.symbol.cast
   mx.symbol.cast_storage
   mx.symbol.load
   mx.symbol.load.json
   mx.symbol.save

Reshaping
^^^^^^^^^^^^^


==========================================================  ======================================================================================================
:doc:`mx.symbol.Concat <./mx.symbol.Concat>`                Perform an feature concat on channel dim (dim 1) over all the inputs
:doc:`mx.symbol.Reshape <./mx.symbol.Reshape>`              Reshapes the input array
:doc:`mx.symbol.flatten <./mx.symbol.flatten>`              Flattens the input array into a 2-D array by collapsing the higher dimensions
:doc:`mx.symbol.reshape_like <./mx.symbol.reshape_like>`    Reshape some or all dimensions of `lhs` to have the same shape as some or all dimensions of `rhs`
:doc:`mx.symbol.scatter_nd <./mx.symbol.scatter_nd>`        Scatters data into a new tensor according to indices
:doc:`mx.symbol.split <./mx.symbol.split>`                  Splits an array along a particular axis into multiple sub-arrays
:doc:`mx.symbol.squeeze <./mx.symbol.squeeze>`              Remove single-dimensional entries from the shape of an array
:doc:`mx.symbol.stack <./mx.symbol.stack>`                  Join a sequence of arrays along a new axis
==========================================================  ======================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.Concat
   mx.symbol.Reshape
   mx.symbol.flatten
   mx.symbol.reshape_like
   mx.symbol.scatter_nd
   mx.symbol.split
   mx.symbol.squeeze
   mx.symbol.stack

Expanding elements
^^^^^^^^^^^^^^^^^^^^^


================================================================================  ========================================================================================================================================================================================
:doc:`mx.symbol.GridGenerator <./mx.symbol.GridGenerator>`                        Generates 2D sampling grid for bilinear sampling
:doc:`mx.symbol.Pad <./mx.symbol.Pad>`                                            Pads an input array with a constant or edge values of the array
:doc:`mx.symbol.UpSampling <./mx.symbol.UpSampling>`                              Upsamples the given input data
:doc:`mx.symbol.broadcast_add <./mx.symbol.broadcast_add>`                        Returns element-wise sum of the input arrays with broadcasting
:doc:`mx.symbol.broadcast_axes <./mx.symbol.broadcast_axes>`                      Broadcasts the input array over particular axes
:doc:`mx.symbol.broadcast_axis <./mx.symbol.broadcast_axis>`                      Broadcasts the input array over particular axes
:doc:`mx.symbol.broadcast_div <./mx.symbol.broadcast_div>`                        Returns element-wise division of the input arrays with broadcasting
:doc:`mx.symbol.broadcast_equal <./mx.symbol.broadcast_equal>`                    Returns the result of element-wise **equal to** (==) comparison operation with broadcasting
:doc:`mx.symbol.broadcast_greater <./mx.symbol.broadcast_greater>`                Returns the result of element-wise **greater than** (>) comparison operation with broadcasting
:doc:`mx.symbol.broadcast_greater_equal <./mx.symbol.broadcast_greater_equal>`    Returns the result of element-wise **greater than or equal to** (>=) comparison operation with broadcasting
:doc:`mx.symbol.broadcast_hypot <./mx.symbol.broadcast_hypot>`                    Returns the hypotenuse of a right angled triangle, given its "legs" with broadcasting
:doc:`mx.symbol.broadcast_lesser <./mx.symbol.broadcast_lesser>`                  Returns the result of element-wise **lesser than** (<) comparison operation with broadcasting
:doc:`mx.symbol.broadcast_lesser_equal <./mx.symbol.broadcast_lesser_equal>`      Returns the result of element-wise **lesser than or equal to** (<=) comparison operation with broadcasting
:doc:`mx.symbol.broadcast_like <./mx.symbol.broadcast_like>`                      Broadcasts lhs to have the same shape as rhs
:doc:`mx.symbol.broadcast_logical_and <./mx.symbol.broadcast_logical_and>`        Returns the result of element-wise **logical and** with broadcasting
:doc:`mx.symbol.broadcast_logical_or <./mx.symbol.broadcast_logical_or>`          Returns the result of element-wise **logical or** with broadcasting
:doc:`mx.symbol.broadcast_logical_xor <./mx.symbol.broadcast_logical_xor>`        Returns the result of element-wise **logical xor** with broadcasting
:doc:`mx.symbol.broadcast_maximum <./mx.symbol.broadcast_maximum>`                Returns element-wise maximum of the input arrays with broadcasting
:doc:`mx.symbol.broadcast_minimum <./mx.symbol.broadcast_minimum>`                Returns element-wise minimum of the input arrays with broadcasting
:doc:`mx.symbol.broadcast_minus <./mx.symbol.broadcast_minus>`                    Returns element-wise difference of the input arrays with broadcasting
:doc:`mx.symbol.broadcast_mod <./mx.symbol.broadcast_mod>`                        Returns element-wise modulo of the input arrays with broadcasting
:doc:`mx.symbol.broadcast_mul <./mx.symbol.broadcast_mul>`                        Returns element-wise product of the input arrays with broadcasting
:doc:`mx.symbol.broadcast_not_equal <./mx.symbol.broadcast_not_equal>`            Returns the result of element-wise **not equal to** (!=) comparison operation with broadcasting
:doc:`mx.symbol.broadcast_plus <./mx.symbol.broadcast_plus>`                      Returns element-wise sum of the input arrays with broadcasting
:doc:`mx.symbol.broadcast_power <./mx.symbol.broadcast_power>`                    Returns result of first array elements raised to powers from second array, element-wise with broadcasting
:doc:`mx.symbol.broadcast_sub <./mx.symbol.broadcast_sub>`                        Returns element-wise difference of the input arrays with broadcasting
:doc:`mx.symbol.broadcast_to <./mx.symbol.broadcast_to>`                          Broadcasts the input array to a new shape
:doc:`mx.symbol.expand_dims <./mx.symbol.expand_dims>`                            Inserts a new axis of size 1 into the array shape For example, given ``x`` with shape ``(2,3,4)``, then ``expand_dims(x, axis=1)`` will return a new array with shape ``(2,1,3,4)``
:doc:`mx.symbol.repeat <./mx.symbol.repeat>`                                      Repeats elements of an array
:doc:`mx.symbol.tile <./mx.symbol.tile>`                                          Repeats the whole array multiple times
================================================================================  ========================================================================================================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.GridGenerator
   mx.symbol.Pad
   mx.symbol.UpSampling
   mx.symbol.broadcast_add
   mx.symbol.broadcast_axes
   mx.symbol.broadcast_axis
   mx.symbol.broadcast_div
   mx.symbol.broadcast_equal
   mx.symbol.broadcast_greater
   mx.symbol.broadcast_greater_equal
   mx.symbol.broadcast_hypot
   mx.symbol.broadcast_lesser
   mx.symbol.broadcast_lesser_equal
   mx.symbol.broadcast_like
   mx.symbol.broadcast_logical_and
   mx.symbol.broadcast_logical_or
   mx.symbol.broadcast_logical_xor
   mx.symbol.broadcast_maximum
   mx.symbol.broadcast_minimum
   mx.symbol.broadcast_minus
   mx.symbol.broadcast_mod
   mx.symbol.broadcast_mul
   mx.symbol.broadcast_not_equal
   mx.symbol.broadcast_plus
   mx.symbol.broadcast_power
   mx.symbol.broadcast_sub
   mx.symbol.broadcast_to
   mx.symbol.expand_dims
   mx.symbol.repeat
   mx.symbol.tile

Rearranging elements
^^^^^^^^^^^^^^^^^^^^^^


================================================================  =================================================================================
:doc:`mx.symbol.SequenceReverse <./mx.symbol.SequenceReverse>`    Reverses the elements of each sequence
:doc:`mx.symbol.SwapAxis <./mx.symbol.SwapAxis>`                  Interchanges two axes of an array
:doc:`mx.symbol.depth_to_space <./mx.symbol.depth_to_space>`      Rearranges(permutes) data from depth into blocks of spatial data
:doc:`mx.symbol.flip <./mx.symbol.flip>`                          Reverses the order of elements along given axis while preserving array shape
:doc:`mx.symbol.reverse <./mx.symbol.reverse>`                    Reverses the order of elements along given axis while preserving array shape
:doc:`mx.symbol.shuffle <./mx.symbol.shuffle>`                    Randomly shuffle the elements
:doc:`mx.symbol.space_to_depth <./mx.symbol.space_to_depth>`      Rearranges(permutes) blocks of spatial data into depth
:doc:`mx.symbol.swapaxes <./mx.symbol.swapaxes>`                  Interchanges two axes of an array
:doc:`mx.symbol.transpose <./mx.symbol.transpose>`                Permutes the dimensions of an array
================================================================  =================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.SequenceReverse
   mx.symbol.SwapAxis
   mx.symbol.depth_to_space
   mx.symbol.flip
   mx.symbol.reverse
   mx.symbol.shuffle
   mx.symbol.space_to_depth
   mx.symbol.swapaxes
   mx.symbol.transpose

Sorting and searching
^^^^^^^^^^^^^^^^^^^^^^^


==============================================================  ====================================================================================================
:doc:`mx.symbol.argmax <./mx.symbol.argmax>`                    Returns indices of the maximum values along an axis
:doc:`mx.symbol.argmax_channel <./mx.symbol.argmax_channel>`    Returns argmax indices of each channel from the input array
:doc:`mx.symbol.argmin <./mx.symbol.argmin>`                    Returns indices of the minimum values along an axis
:doc:`mx.symbol.argsort <./mx.symbol.argsort>`                  Returns the indices that would sort an input array along the given axis
:doc:`mx.symbol.sort <./mx.symbol.sort>`                        Returns a sorted copy of an input array along the given axis
:doc:`mx.symbol.topk <./mx.symbol.topk>`                        Returns the indices of the top *k* elements in an input array along the given axis (by default)
:doc:`mx.symbol.where <./mx.symbol.where>`                      Return the elements, either from x or y, depending on the condition
==============================================================  ====================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.argmax
   mx.symbol.argmax_channel
   mx.symbol.argmin
   mx.symbol.argsort
   mx.symbol.sort
   mx.symbol.topk
   mx.symbol.where

Indexing
^^^^^^^^^^^^


============================================================================  =============================================================================================================================================
:doc:`mx.symbol.Crop <./mx.symbol.Crop>`
:doc:`mx.symbol.SequenceLast <./mx.symbol.SequenceLast>`                      Takes the last element of a sequence
:doc:`mx.symbol.SequenceMask <./mx.symbol.SequenceMask>`                      Sets all elements outside the sequence to a constant value
:doc:`mx.symbol.SliceChannel <./mx.symbol.SliceChannel>`                      Splits an array along a particular axis into multiple sub-arrays
:doc:`mx.symbol.batch_take <./mx.symbol.batch_take>`                          Takes elements from a data batch
:doc:`mx.symbol.choose_element_0index <./mx.symbol.choose_element_0index>`    Picks elements from an input array according to the input indices along the given axis
:doc:`mx.symbol.diag <./mx.symbol.diag>`                                      Extracts a diagonal or constructs a diagonal array
:doc:`mx.symbol.fill_element_0index <./mx.symbol.fill_element_0index>`        Fill one element of each line(row for python, column for R/Julia) in lhs according to index indicated by rhs and values indicated by mhs
:doc:`mx.symbol.gather_nd <./mx.symbol.gather_nd>`                            Gather elements or slices from `data` and store to a tensor whose shape is defined by `indices`
:doc:`mx.symbol.pick <./mx.symbol.pick>`                                      Picks elements from an input array according to the input indices along the given axis
:doc:`mx.symbol.ravel_multi_index <./mx.symbol.ravel_multi_index>`            Converts a batch of index arrays into an array of flat indices
:doc:`mx.symbol.slice <./mx.symbol.slice>`                                    Slices a region of the array
:doc:`mx.symbol.slice_axis <./mx.symbol.slice_axis>`                          Slices along a given axis
:doc:`mx.symbol.slice_like <./mx.symbol.slice_like>`                          Slices a region of the array like the shape of another array
:doc:`mx.symbol.take <./mx.symbol.take>`                                      Takes elements from an input array along the given axis
:doc:`mx.symbol.unravel_index <./mx.symbol.unravel_index>`                    Converts an array of flat indices into a batch of index arrays
============================================================================  =============================================================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.Crop
   mx.symbol.SequenceLast
   mx.symbol.SequenceMask
   mx.symbol.SliceChannel
   mx.symbol.batch_take
   mx.symbol.choose_element_0index
   mx.symbol.diag
   mx.symbol.fill_element_0index
   mx.symbol.gather_nd
   mx.symbol.pick
   mx.symbol.ravel_multi_index
   mx.symbol.slice
   mx.symbol.slice_axis
   mx.symbol.slice_like
   mx.symbol.take
   mx.symbol.unravel_index

Mathematical operations on symbols 
-----------------------------------



Arithmetic
^^^^^^^^^^^^^


==================================================================  ==============================================================================================================================
:doc:`mx.symbol.ElementWiseSum <./mx.symbol.ElementWiseSum>`        Adds all input arguments element-wise
:doc:`mx.symbol.abs <./mx.symbol.abs>`                              Returns element-wise absolute value of the input
:doc:`mx.symbol.add_n <./mx.symbol.add_n>`                          Adds all input arguments element-wise
:doc:`mx.symbol.all_finite <./mx.symbol.all_finite>`                Check if all the float numbers in the array are finite (used for AMP)
:doc:`mx.symbol.cbrt <./mx.symbol.cbrt>`                            Returns element-wise cube-root value of the input
:doc:`mx.symbol.cumsum <./mx.symbol.cumsum>`                        Return the cumulative sum of the elements along a given axis
:doc:`mx.symbol.elemwise_add <./mx.symbol.elemwise_add>`            Adds arguments element-wise
:doc:`mx.symbol.elemwise_div <./mx.symbol.elemwise_div>`            Divides arguments element-wise
:doc:`mx.symbol.elemwise_mul <./mx.symbol.elemwise_mul>`            Multiplies arguments element-wise
:doc:`mx.symbol.elemwise_sub <./mx.symbol.elemwise_sub>`            Subtracts arguments element-wise
:doc:`mx.symbol.erf <./mx.symbol.erf>`                              Returns element-wise gauss error function of the input
:doc:`mx.symbol.erfinv <./mx.symbol.erfinv>`                        Returns element-wise inverse gauss error function of the input
:doc:`mx.symbol.exp <./mx.symbol.exp>`                              Returns element-wise exponential value of the input
:doc:`mx.symbol.expm1 <./mx.symbol.expm1>`                          Returns ``exp(x) - 1`` computed element-wise on the input
:doc:`mx.symbol.gamma <./mx.symbol.gamma>`                          Returns the gamma function (extension of the factorial function \ to the reals), computed element-wise on the input array
:doc:`mx.symbol.gammaln <./mx.symbol.gammaln>`                      Returns element-wise log of the absolute value of the gamma function \ of the input
:doc:`mx.symbol.identity <./mx.symbol.identity>`                    Returns a copy of the input
:doc:`mx.symbol.log <./mx.symbol.log>`                              Returns element-wise Natural logarithmic value of the input
:doc:`mx.symbol.log10 <./mx.symbol.log10>`                          Returns element-wise Base-10 logarithmic value of the input
:doc:`mx.symbol.log1p <./mx.symbol.log1p>`                          Returns element-wise ``log(1 + x)`` value of the input
:doc:`mx.symbol.log2 <./mx.symbol.log2>`                            Returns element-wise Base-2 logarithmic value of the input
:doc:`mx.symbol.logical_not <./mx.symbol.logical_not>`              Returns the result of logical NOT (!) function
:doc:`mx.symbol.moments <./mx.symbol.moments>`                      Calculate the mean and variance of `data`
:doc:`mx.symbol.multi_all_finite <./mx.symbol.multi_all_finite>`    Check if all the float numbers in all the arrays are finite (used for AMP)
:doc:`mx.symbol.multi_lars <./mx.symbol.multi_lars>`                Compute the LARS coefficients of multiple weights and grads from their sums of square"
:doc:`mx.symbol.multi_sum_sq <./mx.symbol.multi_sum_sq>`            Compute the sums of squares of multiple arrays
:doc:`mx.symbol.negative <./mx.symbol.negative>`                    Numerical negative of the argument, element-wise
:doc:`mx.symbol.rcbrt <./mx.symbol.rcbrt>`                          Returns element-wise inverse cube-root value of the input
:doc:`mx.symbol.reciprocal <./mx.symbol.reciprocal>`                Returns the reciprocal of the argument, element-wise
:doc:`mx.symbol.reset_arrays <./mx.symbol.reset_arrays>`            Set to zero multiple arrays
:doc:`mx.symbol.rsqrt <./mx.symbol.rsqrt>`                          Returns element-wise inverse square-root value of the input
:doc:`mx.symbol.sign <./mx.symbol.sign>`                            Returns element-wise sign of the input
:doc:`mx.symbol.sqrt <./mx.symbol.sqrt>`                            Returns element-wise square-root value of the input
:doc:`mx.symbol.square <./mx.symbol.square>`                        Returns element-wise squared value of the input
==================================================================  ==============================================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.ElementWiseSum
   mx.symbol.abs
   mx.symbol.add_n
   mx.symbol.all_finite
   mx.symbol.cbrt
   mx.symbol.cumsum
   mx.symbol.elemwise_add
   mx.symbol.elemwise_div
   mx.symbol.elemwise_mul
   mx.symbol.elemwise_sub
   mx.symbol.erf
   mx.symbol.erfinv
   mx.symbol.exp
   mx.symbol.expm1
   mx.symbol.gamma
   mx.symbol.gammaln
   mx.symbol.identity
   mx.symbol.log
   mx.symbol.log10
   mx.symbol.log1p
   mx.symbol.log2
   mx.symbol.logical_not
   mx.symbol.moments
   mx.symbol.multi_all_finite
   mx.symbol.multi_lars
   mx.symbol.multi_sum_sq
   mx.symbol.negative
   mx.symbol.rcbrt
   mx.symbol.reciprocal
   mx.symbol.reset_arrays
   mx.symbol.rsqrt
   mx.symbol.sign
   mx.symbol.sqrt
   mx.symbol.square

Reduce
^^^^^^^^^^^^^


==================================================  ===================================================================================================
:doc:`mx.symbol.max <./mx.symbol.max>`              Computes the max of array elements over given axes
:doc:`mx.symbol.max_axis <./mx.symbol.max_axis>`    Computes the max of array elements over given axes
:doc:`mx.symbol.mean <./mx.symbol.mean>`            Computes the mean of array elements over given axes
:doc:`mx.symbol.nanprod <./mx.symbol.nanprod>`      Computes the product of array elements over given axes treating Not a Numbers (``NaN``) as one
:doc:`mx.symbol.nansum <./mx.symbol.nansum>`        Computes the sum of array elements over given axes treating Not a Numbers (``NaN``) as zero
:doc:`mx.symbol.prod <./mx.symbol.prod>`            Computes the product of array elements over given axes
:doc:`mx.symbol.sum <./mx.symbol.sum>`              Computes the sum of array elements over given axes
:doc:`mx.symbol.sum_axis <./mx.symbol.sum_axis>`    Computes the sum of array elements over given axes
==================================================  ===================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.max
   mx.symbol.max_axis
   mx.symbol.mean
   mx.symbol.nanprod
   mx.symbol.nansum
   mx.symbol.prod
   mx.symbol.sum
   mx.symbol.sum_axis

Round
^^^^^^^^^^^^^


============================================  ==========================================================================================
:doc:`mx.symbol.ceil <./mx.symbol.ceil>`      Returns element-wise ceiling of the input
:doc:`mx.symbol.clip <./mx.symbol.clip>`      Clips (limits) the values in an array
:doc:`mx.symbol.fix <./mx.symbol.fix>`        Returns element-wise rounded value to the nearest \ integer towards zero of the input
:doc:`mx.symbol.floor <./mx.symbol.floor>`    Returns element-wise floor of the input
:doc:`mx.symbol.rint <./mx.symbol.rint>`      Returns element-wise rounded value to the nearest integer of the input
:doc:`mx.symbol.round <./mx.symbol.round>`    Returns element-wise rounded value to the nearest integer of the input
:doc:`mx.symbol.trunc <./mx.symbol.trunc>`    Return the element-wise truncated value of the input
============================================  ==========================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.ceil
   mx.symbol.clip
   mx.symbol.fix
   mx.symbol.floor
   mx.symbol.rint
   mx.symbol.round
   mx.symbol.trunc

Linear algebra
^^^^^^^^^^^^^^^^


========================================================================  ============================================================================================
:doc:`mx.symbol.L2Normalization <./mx.symbol.L2Normalization>`            Normalize the input array using the L2 norm
:doc:`mx.symbol.batch_dot <./mx.symbol.batch_dot>`                        Batchwise dot product
:doc:`mx.symbol.dot <./mx.symbol.dot>`                                    Dot product of two arrays
:doc:`mx.symbol.khatri_rao <./mx.symbol.khatri_rao>`                      Computes the Khatri-Rao product of the input matrices
:doc:`mx.symbol.linalg_det <./mx.symbol.linalg_det>`                      Compute the determinant of a matrix
:doc:`mx.symbol.linalg_extractdiag <./mx.symbol.linalg_extractdiag>`      Extracts the diagonal entries of a square matrix
:doc:`mx.symbol.linalg_extracttrian <./mx.symbol.linalg_extracttrian>`    Extracts a triangular sub-matrix from a square matrix
:doc:`mx.symbol.linalg_gelqf <./mx.symbol.linalg_gelqf>`                  LQ factorization for general matrix
:doc:`mx.symbol.linalg_gemm <./mx.symbol.linalg_gemm>`                    Performs general matrix multiplication and accumulation
:doc:`mx.symbol.linalg_gemm2 <./mx.symbol.linalg_gemm2>`                  Performs general matrix multiplication
:doc:`mx.symbol.linalg_inverse <./mx.symbol.linalg_inverse>`              Compute the inverse of a matrix
:doc:`mx.symbol.linalg_makediag <./mx.symbol.linalg_makediag>`            Constructs a square matrix with the input as diagonal
:doc:`mx.symbol.linalg_maketrian <./mx.symbol.linalg_maketrian>`          Constructs a square matrix with the input representing a specific triangular sub-matrix
:doc:`mx.symbol.linalg_potrf <./mx.symbol.linalg_potrf>`                  Performs Cholesky factorization of a symmetric positive-definite matrix
:doc:`mx.symbol.linalg_potri <./mx.symbol.linalg_potri>`                  Performs matrix inversion from a Cholesky factorization
:doc:`mx.symbol.linalg_slogdet <./mx.symbol.linalg_slogdet>`              Compute the sign and log of the determinant of a matrix
:doc:`mx.symbol.linalg_sumlogdiag <./mx.symbol.linalg_sumlogdiag>`        Computes the sum of the logarithms of the diagonal elements of a square matrix
:doc:`mx.symbol.linalg_syrk <./mx.symbol.linalg_syrk>`                    Multiplication of matrix with its transpose
:doc:`mx.symbol.linalg_trmm <./mx.symbol.linalg_trmm>`                    Performs multiplication with a lower triangular matrix
:doc:`mx.symbol.linalg_trsm <./mx.symbol.linalg_trsm>`                    Solves matrix equation involving a lower triangular matrix
:doc:`mx.symbol.norm <./mx.symbol.norm>`                                  Computes the norm on an NDArray
:doc:`mx.symbol.smooth_l1 <./mx.symbol.smooth_l1>`                        Calculate Smooth L1 Loss(lhs, scalar) by summing
========================================================================  ============================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.L2Normalization
   mx.symbol.batch_dot
   mx.symbol.dot
   mx.symbol.khatri_rao
   mx.symbol.linalg_det
   mx.symbol.linalg_extractdiag
   mx.symbol.linalg_extracttrian
   mx.symbol.linalg_gelqf
   mx.symbol.linalg_gemm
   mx.symbol.linalg_gemm2
   mx.symbol.linalg_inverse
   mx.symbol.linalg_makediag
   mx.symbol.linalg_maketrian
   mx.symbol.linalg_potrf
   mx.symbol.linalg_potri
   mx.symbol.linalg_slogdet
   mx.symbol.linalg_sumlogdiag
   mx.symbol.linalg_syrk
   mx.symbol.linalg_trmm
   mx.symbol.linalg_trsm
   mx.symbol.norm
   mx.symbol.smooth_l1

Trigonometric functions
^^^^^^^^^^^^^^^^^^^^^^^^^


================================================  =====================================================================
:doc:`mx.symbol.arccos <./mx.symbol.arccos>`      Returns element-wise inverse cosine of the input array
:doc:`mx.symbol.arcsin <./mx.symbol.arcsin>`      Returns element-wise inverse sine of the input array
:doc:`mx.symbol.arctan <./mx.symbol.arctan>`      Returns element-wise inverse tangent of the input array
:doc:`mx.symbol.cos <./mx.symbol.cos>`            Computes the element-wise cosine of the input array
:doc:`mx.symbol.degrees <./mx.symbol.degrees>`    Converts each element of the input array from radians to degrees
:doc:`mx.symbol.radians <./mx.symbol.radians>`    Converts each element of the input array from degrees to radians
:doc:`mx.symbol.sin <./mx.symbol.sin>`            Computes the element-wise sine of the input array
:doc:`mx.symbol.tan <./mx.symbol.tan>`            Computes the element-wise tangent of the input array
================================================  =====================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.arccos
   mx.symbol.arcsin
   mx.symbol.arctan
   mx.symbol.cos
   mx.symbol.degrees
   mx.symbol.radians
   mx.symbol.sin
   mx.symbol.tan

Hyperbolic functions
^^^^^^^^^^^^^^^^^^^^^^^^^


================================================  ====================================================================================================
:doc:`mx.symbol.arccosh <./mx.symbol.arccosh>`    Returns the element-wise inverse hyperbolic cosine of the input array, \ computed element-wise
:doc:`mx.symbol.arcsinh <./mx.symbol.arcsinh>`    Returns the element-wise inverse hyperbolic sine of the input array, \ computed element-wise
:doc:`mx.symbol.arctanh <./mx.symbol.arctanh>`    Returns the element-wise inverse hyperbolic tangent of the input array, \ computed element-wise
:doc:`mx.symbol.cosh <./mx.symbol.cosh>`          Returns the hyperbolic cosine  of the input array, computed element-wise
:doc:`mx.symbol.sinh <./mx.symbol.sinh>`          Returns the hyperbolic sine of the input array, computed element-wise
:doc:`mx.symbol.tanh <./mx.symbol.tanh>`          Returns the hyperbolic tangent of the input array, computed element-wise
================================================  ====================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.arccosh
   mx.symbol.arcsinh
   mx.symbol.arctanh
   mx.symbol.cosh
   mx.symbol.sinh
   mx.symbol.tanh

Neural network symbol operations
-----------------------------------------------------


====================================================================================  ========================================================================================================
:doc:`mx.symbol.Activation <./mx.symbol.Activation>`                                  Applies an activation function element-wise to the input
:doc:`mx.symbol.BatchNorm <./mx.symbol.BatchNorm>`                                    Batch normalization
:doc:`mx.symbol.BatchNorm_v1 <./mx.symbol.BatchNorm_v1>`                              Batch normalization
:doc:`mx.symbol.BlockGrad <./mx.symbol.BlockGrad>`                                    Stops gradient computation
:doc:`mx.symbol.CTCLoss <./mx.symbol.CTCLoss>`                                        Connectionist Temporal Classification Loss
:doc:`mx.symbol.Convolution <./mx.symbol.Convolution>`                                Compute *N*-D convolution on *(N+2)*-D input
:doc:`mx.symbol.Convolution_v1 <./mx.symbol.Convolution_v1>`                          This operator is DEPRECATED
:doc:`mx.symbol.Correlation <./mx.symbol.Correlation>`                                Applies correlation to inputs
:doc:`mx.symbol.Custom <./mx.symbol.Custom>`                                          Apply a custom operator implemented in a frontend language (like Python)
:doc:`mx.symbol.Deconvolution <./mx.symbol.Deconvolution>`                            Computes 1D or 2D transposed convolution (aka fractionally strided convolution) of the input tensor
:doc:`mx.symbol.Dropout <./mx.symbol.Dropout>`                                        Applies dropout operation to input array
:doc:`mx.symbol.Embedding <./mx.symbol.Embedding>`                                    Maps integer indices to vector representations (embeddings)
:doc:`mx.symbol.FullyConnected <./mx.symbol.FullyConnected>`                          Applies a linear transformation: :math:`Y = XW^T + b`
:doc:`mx.symbol.IdentityAttachKLSparseReg <./mx.symbol.IdentityAttachKLSparseReg>`    Apply a sparse regularization to the output a sigmoid activation function
:doc:`mx.symbol.InstanceNorm <./mx.symbol.InstanceNorm>`                              Applies instance normalization to the n-dimensional input array
:doc:`mx.symbol.LRN <./mx.symbol.LRN>`                                                Applies local response normalization to the input
:doc:`mx.symbol.LayerNorm <./mx.symbol.LayerNorm>`                                    Layer normalization
:doc:`mx.symbol.LeakyReLU <./mx.symbol.LeakyReLU>`                                    Applies Leaky rectified linear unit activation element-wise to the input
:doc:`mx.symbol.LinearRegressionOutput <./mx.symbol.LinearRegressionOutput>`          Computes and optimizes for squared loss during backward propagation
:doc:`mx.symbol.LogisticRegressionOutput <./mx.symbol.LogisticRegressionOutput>`      Applies a logistic function to the input
:doc:`mx.symbol.MAERegressionOutput <./mx.symbol.MAERegressionOutput>`                Computes mean absolute error of the input
:doc:`mx.symbol.MakeLoss <./mx.symbol.MakeLoss>`                                      Make your own loss function in network construction
:doc:`mx.symbol.Pooling <./mx.symbol.Pooling>`                                        Performs pooling on the input
:doc:`mx.symbol.Pooling_v1 <./mx.symbol.Pooling_v1>`                                  This operator is DEPRECATED
:doc:`mx.symbol.RNN <./mx.symbol.RNN>`                                                Applies recurrent layers to input data
:doc:`mx.symbol.ROIPooling <./mx.symbol.ROIPooling>`                                  Performs region of interest(ROI) pooling on the input array
:doc:`mx.symbol.SVMOutput <./mx.symbol.SVMOutput>`                                    Computes support vector machine based transformation of the input
:doc:`mx.symbol.SoftmaxActivation <./mx.symbol.SoftmaxActivation>`                    Applies softmax activation to input
:doc:`mx.symbol.SoftmaxOutput <./mx.symbol.SoftmaxOutput>`                            Computes the gradient of cross entropy loss with respect to softmax output
:doc:`mx.symbol.SpatialTransformer <./mx.symbol.SpatialTransformer>`                  Applies a spatial transformer to input feature map
:doc:`mx.symbol.ctc_loss <./mx.symbol.ctc_loss>`                                      Connectionist Temporal Classification Loss
:doc:`mx.symbol.hard_sigmoid <./mx.symbol.hard_sigmoid>`                              Computes hard sigmoid of x element-wise
:doc:`mx.symbol.log_softmax <./mx.symbol.log_softmax>`                                Computes the log softmax of the input
:doc:`mx.symbol.make_loss <./mx.symbol.make_loss>`                                    Make your own loss function in network construction
:doc:`mx.symbol.relu <./mx.symbol.relu>`                                              Computes rectified linear activation
:doc:`mx.symbol.sigmoid <./mx.symbol.sigmoid>`                                        Computes sigmoid of x element-wise
:doc:`mx.symbol.softmax <./mx.symbol.softmax>`                                        Applies the softmax function
:doc:`mx.symbol.softmax_cross_entropy <./mx.symbol.softmax_cross_entropy>`            Calculate cross entropy of softmax output and one-hot label
:doc:`mx.symbol.softmin <./mx.symbol.softmin>`                                        Applies the softmin function
:doc:`mx.symbol.softsign <./mx.symbol.softsign>`                                      Computes softsign of x element-wise
:doc:`mx.symbol.stop_gradient <./mx.symbol.stop_gradient>`                            Stops gradient computation
====================================================================================  ========================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.symbol.Activation
   mx.symbol.BatchNorm
   mx.symbol.BatchNorm_v1
   mx.symbol.BlockGrad
   mx.symbol.CTCLoss
   mx.symbol.Convolution
   mx.symbol.Convolution_v1
   mx.symbol.Correlation
   mx.symbol.Custom
   mx.symbol.Deconvolution
   mx.symbol.Dropout
   mx.symbol.Embedding
   mx.symbol.FullyConnected
   mx.symbol.IdentityAttachKLSparseReg
   mx.symbol.InstanceNorm
   mx.symbol.LRN
   mx.symbol.LayerNorm
   mx.symbol.LeakyReLU
   mx.symbol.LinearRegressionOutput
   mx.symbol.LogisticRegressionOutput
   mx.symbol.MAERegressionOutput
   mx.symbol.MakeLoss
   mx.symbol.Pooling
   mx.symbol.Pooling_v1
   mx.symbol.RNN
   mx.symbol.ROIPooling
   mx.symbol.SVMOutput
   mx.symbol.SoftmaxActivation
   mx.symbol.SoftmaxOutput
   mx.symbol.SpatialTransformer
   mx.symbol.ctc_loss
   mx.symbol.hard_sigmoid
   mx.symbol.log_softmax
   mx.symbol.make_loss
   mx.symbol.relu
   mx.symbol.sigmoid
   mx.symbol.softmax
   mx.symbol.softmax_cross_entropy
   mx.symbol.softmin
   mx.symbol.softsign
   mx.symbol.stop_gradient

